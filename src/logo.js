import * as THREE from 'three';

/* =========================================================================
   LUMORC — small 3D particle wordmark (header brand)
   A miniature of the original effect: particles sampled from the word
   "LUMORC". They assemble on load, then scatter away from the cursor and
   ease back when it leaves. Monochrome, soft.
   ========================================================================= */

const mount = document.getElementById('brand-logo');
if (mount) {
  try {
    initLogo(mount);
  } catch (err) {
    console.error('[logo] init failed:', err);
  }
}

function initLogo(mount) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = mount.clientWidth || 168;
  let h = mount.clientHeight || 46;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 5000);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  mount.appendChild(renderer.domElement);

  // --- sample "LUMORC" into 2D points, then center on the origin ----------------
  const raw = sampleText('LUMORC');
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  raw.forEach((p) => {
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
  });
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const textW = maxX - minX;
  const textH = maxY - minY;
  const REPEL_RADIUS = textH * 0.85;

  const COUNT = raw.length;
  const positions = new Float32Array(COUNT * 3);
  const targets = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3;
    targets[i3] = raw[i].x - cx;
    targets[i3 + 1] = raw[i].y - cy;
    targets[i3 + 2] = (Math.random() - 0.5) * 7;

    // start scattered so the mark assembles on load
    positions[i3] = targets[i3] + (Math.random() - 0.5) * 130;
    positions[i3 + 1] = targets[i3 + 1] + (Math.random() - 0.5) * 130;
    positions[i3 + 2] = (Math.random() - 0.5) * 130;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 2.4,
    map: makeDotTexture(),
    color: 0xffffff,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    sizeAttenuation: false, // constant pixel size → crisp at small scale
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  fitCamera();

  function fitCamera() {
    camera.aspect = w / h;
    const vFov = (camera.fov * Math.PI) / 180;
    const margin = 1.3;
    const dH = (textH * margin) / 2 / Math.tan(vFov / 2);
    const dW = (textW * margin) / 2 / (Math.tan(vFov / 2) * camera.aspect);
    camera.position.set(0, 0, Math.max(dH, dW) + 20);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }

  // --- pointer (the cursor "scares" the points away) ----------------------------
  const pointer = { x: 99, y: 99 }; // start far off so there's no effect on load
  window.addEventListener('mousemove', (e) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  // --- animation ----------------------------------------------------------------
  const arr = geometry.attributes.position.array;
  let rafId = 0;
  let running = false;

  function tick() {
    rafId = requestAnimationFrame(tick);

    // cursor projected onto the wordmark's plane (z = 0)
    const vFov = (camera.fov * Math.PI) / 180;
    const halfH = camera.position.z * Math.tan(vFov / 2);
    const halfW = halfH * camera.aspect;
    const mx = pointer.x * halfW;
    const my = pointer.y * halfH;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      // ease back toward the letter position
      arr[i3] += (targets[i3] - arr[i3]) * 0.08;
      arr[i3 + 1] += (targets[i3 + 1] - arr[i3 + 1]) * 0.08;
      arr[i3 + 2] += (targets[i3 + 2] - arr[i3 + 2]) * 0.08;

      // shove away from the cursor — points scatter when "scared", settle when it leaves
      const dx = arr[i3] - mx;
      const dy = arr[i3 + 1] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS) {
        const force = (1 - dist / REPEL_RADIUS) * 4;
        arr[i3] += dx * 0.1 * force;
        arr[i3 + 1] += dy * 0.1 * force;
      }
    }
    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  function start() {
    if (running || prefersReduced) return;
    running = true;
    tick();
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  if (prefersReduced) {
    // snap to the assembled wordmark, no motion
    targets.forEach((v, i) => (arr[i] = v));
    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  } else {
    start();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  // keep the canvas sized to its slot
  window.addEventListener('resize', () => {
    w = mount.clientWidth || w;
    h = mount.clientHeight || h;
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    fitCamera();
    if (prefersReduced) renderer.render(scene, camera);
  });
}

// --- helpers -----------------------------------------------------------------
function sampleText(text) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const font = 'bold 90px Arial, sans-serif';
  ctx.font = font;
  const m = ctx.measureText(text);
  c.width = Math.ceil(m.width) + 20;
  c.height = 120;

  ctx.font = font;
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 10, c.height / 2);

  const data = ctx.getImageData(0, 0, c.width, c.height).data;
  const pts = [];
  const step = 2; // downsample for a lighter point cloud
  for (let y = 0; y < c.height; y += step) {
    for (let x = 0; x < c.width; x += step) {
      if (data[(y * c.width + x) * 4 + 3] > 128) {
        pts.push({ x: x - c.width / 2, y: -(y - c.height / 2) });
      }
    }
  }
  return pts;
}

function makeDotTexture() {
  const s = 64;
  const cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
