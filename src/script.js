import Lenis from 'lenis';
import './logo.js';   // small 3D particle wordmark in the header
import './liquid.js'; // scroll-driven liquid centerpiece (blob → laptop → phone)

/* =========================================================================
   UI behaviour: smooth scrolling + scroll-reveal + header state
   ========================================================================= */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// inertial smooth scrolling (skip for reduced-motion; native momentum on touch)
let lenis = null;
if (!prefersReducedMotion) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);

  // make in-page anchor links glide instead of jump
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = href.length > 1 ? document.querySelector(href) : null;
      if (isRoomOpen()) closeRoom(); // leaving the room via the top-bar nav
      if (href === '#' || href === '#top') { e.preventDefault(); lenis.scrollTo(0); }
      else if (target) { e.preventDefault(); lenis.scrollTo(target); }
    });
  });
}

// reveal elements as they enter the viewport
const revealEls = document.querySelectorAll('.reveal');
const revealAll = () => revealEls.forEach((el) => el.classList.add('is-visible'));
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealAll();
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
  // failsafe: never leave content stuck hidden
  setTimeout(revealAll, 3000);
}

// solidify the header once the page is scrolled
const header = document.getElementById('site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* =========================================================================
   CONTACT ROOM: clicking hello@lumorc.com "walks" you into a contact form.
   The 3D camera trucks right (liquid.js listens for lumorc:room) while the
   room slides in from the right and the page slides out left.
   ========================================================================= */

const room = document.getElementById('contact-room');
const emailLinks = document.querySelectorAll('a[href^="mailto:hello@lumorc.com"]');
let roomReturnFocus = null;

function isRoomOpen() {
  return document.body.classList.contains('room-open');
}

function setRoom(open) {
  document.body.classList.toggle('room-open', open);
  window.dispatchEvent(new CustomEvent('lumorc:room', { detail: { open } }));
  if (room) {
    room.setAttribute('aria-hidden', String(!open));
    if (open) room.removeAttribute('inert');
    else room.setAttribute('inert', '');
  }
  // lock the page scroll while the room is open
  if (lenis) open ? lenis.stop() : lenis.start();
  else document.documentElement.classList.toggle('scroll-lock', open);
}

function openRoom(trigger) {
  if (isRoomOpen() || !room) return;
  roomReturnFocus = trigger || document.activeElement;
  setRoom(true);
  const first = room.querySelector('input, textarea, button');
  if (first) setTimeout(() => first.focus({ preventScroll: true }), 120);
}

function closeRoom() {
  if (!isRoomOpen()) return;
  setRoom(false);
  if (roomReturnFocus && roomReturnFocus.focus) {
    roomReturnFocus.focus({ preventScroll: true });
  }
}

emailLinks.forEach((a) =>
  a.addEventListener('click', (e) => {
    e.preventDefault();
    openRoom(a);
  })
);

// reduced-motion users have no smooth-scroll handler above, so close the room
// on any top-bar nav click here too
if (prefersReducedMotion) {
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', () => {
      if (isRoomOpen()) closeRoom();
    })
  );
}

if (room) {
  const back = document.getElementById('room-back');
  if (back) back.addEventListener('click', closeRoom);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isRoomOpen()) closeRoom();
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const get = (k) => (data.get(k) || '').toString().trim();
      const name = get('name');
      const email = get('email');
      const company = get('company');
      const phone = get('phone');
      const budget = get('budget');
      const message = get('message');

      // No backend on this static site yet, so the enquiry is never lost: we
      // compose a mailto and show an in-room confirmation. To deliver server-
      // side later, replace this block with a `fetch(endpoint, { method:'POST',
      // body: data })` to Formspree / Resend / your own handler.
      const subject = encodeURIComponent(`Project enquiry — ${name || 'LUMORC'}`);
      const details = [
        message,
        '',
        '—',
        name ? `Name: ${name}` : '',
        email ? `Email: ${email}` : '',
        company ? `Company: ${company}` : '',
        phone ? `Phone: ${phone}` : '',
        budget ? `Budget: ${budget}` : '',
      ].filter((line) => line !== '');
      const body = encodeURIComponent(details.join('\n'));
      const mailto = `mailto:hello@lumorc.com?subject=${subject}&body=${body}`;

      // build the success panel via the DOM (textContent) so user input is never
      // interpreted as HTML
      const success = document.createElement('div');
      success.className = 'form-success';

      const line = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = `Thanks${name ? `, ${name}` : ''}.`;
      line.appendChild(strong);
      line.append(' Your enquiry is ready to send.');

      const action = document.createElement('p');
      const link = document.createElement('a');
      link.className = 'btn btn-primary';
      link.href = mailto;
      link.innerHTML = 'Open in your mail app <span class="arrow">→</span>';
      action.appendChild(link);

      success.append(line, action);
      form.replaceWith(success);
    });
  }
}

/* =========================================================================
   CUSTOM DROPDOWN: a themed replacement for <select> (used by Budget range).
   The chosen value is written to a hidden <input> so the form submits exactly
   as before. Mouse + keyboard (↑/↓, Enter, Esc) supported.
   ========================================================================= */
document.querySelectorAll('.dropdown').forEach((dd) => {
  const btn = dd.querySelector('.dropdown-btn');
  const list = dd.querySelector('.dropdown-list');
  const valueEl = dd.querySelector('.dropdown-value');
  const hidden = dd.querySelector('input[type="hidden"]');
  const options = Array.from(dd.querySelectorAll('.dropdown-option'));
  if (!btn || !list || !valueEl || !options.length) return;

  let activeIndex = -1;
  const isOpen = () => dd.classList.contains('is-open');

  const setActive = (i) => {
    activeIndex = i;
    options.forEach((o, idx) => o.classList.toggle('is-active', idx === i));
    if (i >= 0) options[i].scrollIntoView({ block: 'nearest' });
  };

  const open = () => {
    dd.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    list.hidden = false;
    const sel = options.findIndex((o) => o.classList.contains('is-selected'));
    setActive(sel >= 0 ? sel : 0);
  };

  const close = () => {
    dd.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    list.hidden = true;
    setActive(-1);
  };

  const choose = (opt) => {
    const v = opt.dataset.value;
    if (hidden) hidden.value = v;
    valueEl.textContent = v;
    valueEl.classList.remove('is-placeholder');
    options.forEach((o) => o.classList.toggle('is-selected', o === opt));
    close();
    btn.focus();
  };

  btn.addEventListener('click', () => (isOpen() ? close() : open()));
  options.forEach((opt) => opt.addEventListener('click', () => choose(opt)));

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen()) return open();
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      setActive((activeIndex + dir + options.length) % options.length);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isOpen() && activeIndex >= 0) choose(options[activeIndex]);
      else open();
    } else if (e.key === 'Escape' && isOpen()) {
      e.preventDefault();
      close();
    }
  });

  // close when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (isOpen() && !dd.contains(e.target)) close();
  });
});
