import Lenis from 'lenis';
import './logo.js';   // small 3D particle wordmark in the header
import './liquid.js'; // scroll-driven liquid centerpiece (blob → laptop → phone)

/* =========================================================================
   UI behaviour: smooth scrolling + scroll-reveal + header state
   ========================================================================= */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// inertial smooth scrolling (skip for reduced-motion; native momentum on touch)
if (!prefersReducedMotion) {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);

  // make in-page anchor links glide instead of jump
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = href.length > 1 ? document.querySelector(href) : null;
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
