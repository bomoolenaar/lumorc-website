import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/* =========================================================================
   LUMORC — section-driven particle centerpiece
   A cloud of soft dots settles into a fully-formed object per section and
   holds it. Scrolling into the next section TRIGGERS a transition that plays
   to completion — particles stream like elastic "strings" into the next shape
   (motion trails only during the morph). No scrubbable half-formed state.

   ----  WHICH OBJECT SHOWS WHERE  -----------------------------------------
   Each <section> in index.html has  data-stage="<key>"  (e.g. data-stage="laptop").
   The keys map to the STAGES table below. To change a section's object, edit
   its data-stage; to give it a real model, drop a .glb (see next block).

   ----  DROP IN YOUR OWN MODELS  ------------------------------------------
   Put uncompressed .glb files in  src/models/  named after the stage:
       laptop.glb  tablet.glb  phone.glb  watch.glb  approach.glb
   The cloud samples points off the surface, so any shape works. Missing file
   → procedural fallback. Auto-centered & auto-fit; face it "front" (+Z).
   Restart dev / rebuild after adding a file.
   ========================================================================= */

const MODEL_URLS = import.meta.glob('./models/*.glb', { eager: true, query: '?url', import: 'default' });

const PARTICLE_COUNT = 20000;
const FIT_SIZE = 2.3;
const MODEL_YAW = -Math.PI / 2; // rotate every loaded .glb 90° left (flip sign for right)
const EASE = 0.085;
const MORPH_STEP = 0.018; // steady transition speed (per frame)
const SWAY = 0.1;
const SHIMMER = 0.02;

// stage key → procedural fallback shape + optional model file
const STAGES = {
  blob: { blob: true },
  laptop: { file: 'laptop.glb', shape: laptopTarget, yaw: Math.PI / 2 }, // extra +90° (right)
  web: { file: 'Web_experiences.glb', shape: tabletTarget },
  phone: { file: 'phone.glb', shape: phoneTarget },
  studio: { file: 'Studio.glb', shape: watchTarget },
  approach: { file: 'approach.glb', shape: torusTarget }, // "how a project runs"
};

const mount = document.getElementById('canvas-container');
if (mount) {
  try {
    initLiquid(mount);
  } catch (err) {
    console.error('[liquid] init failed:', err);
  }
}

function initLiquid(mount) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BG = 0x000000; // pure black base, like Resend
  const isMobile = window.matchMedia('(max-width: 860px)').matches;
  const N = isMobile ? 9000 : PARTICLE_COUNT; // fewer particles on phones for performance

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(BG, 0.085);

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 6);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(BG, 1);
  renderer.autoClear = false; // manual clear so particles can leave trails ("strings")
  renderer.clear();
  mount.appendChild(renderer.domElement);

  // fullscreen fade quad: painting BG at < 1 opacity leaves trails behind moving dots
  const fadeScene = new THREE.Scene();
  const fadeCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const fadeMat = new THREE.MeshBasicMaterial({ color: BG, transparent: true, opacity: 1, depthTest: false, depthWrite: false });
  const fadeQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fadeMat);
  fadeQuad.frustumCulled = false;
  fadeScene.add(fadeQuad);

  const dirs = new Float32Array(N * 3);
  const current = new Float32Array(N * 3);
  const positions = new Float32Array(N * 3);
  const colors = new Float32Array(N * 3);
  const spd = new Float32Array(N);

  for (let i = 0; i < N; i++) {
    const i3 = i * 3;
    const u = Math.random() * 2 - 1;
    const th = Math.random() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    const dx = s * Math.cos(th), dy = s * Math.sin(th), dz = u;
    dirs[i3] = dx; dirs[i3 + 1] = dy; dirs[i3 + 2] = dz;

    current[i3] = dx * 0.86 + (Math.random() - 0.5) * 3;
    current[i3 + 1] = dy * 0.86 + (Math.random() - 0.5) * 3;
    current[i3 + 2] = dz * 0.86 + (Math.random() - 0.5) * 3;

    const b = 0.55 + Math.pow(Math.random(), 1.6) * 0.45;
    colors[i3] = b; colors[i3 + 1] = b; colors[i3 + 2] = b;
    spd[i] = 0.4 + Math.random() * 1.1;
  }
  positions.set(current);

  // precompute procedural targets per non-blob stage; load models over them
  for (const stage of Object.values(STAGES)) {
    if (stage.blob) continue;
    stage.pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const t = stage.shape([dirs[i3], dirs[i3 + 1], dirs[i3 + 2]]);
      stage.pos[i3] = t[0]; stage.pos[i3 + 1] = t[1]; stage.pos[i3 + 2] = t[2];
    }
    if (stage.file) loadModelInto(stage.file, stage.pos, N, stage.yaw || 0);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 3.1 : 2.6,
    map: makeDotTexture(),
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    depthTest: false,
    sizeAttenuation: false,
    fog: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);
  const arr = geometry.attributes.position.array;

  // --- section + pointer state --------------------------------------------------
  const rows = Array.from(document.querySelectorAll('[data-stage]'));
  const firstStage = rows[0] && STAGES[rows[0].dataset.stage] ? rows[0].dataset.stage : 'blob';
  let fromKey = firstStage;
  let toKey = firstStage;
  let morph = 1; // 0 → mid-transition, 1 → settled on toKey
  let prevMorph = 1;
  let exitDir = 1; // which wall this transition exits toward (locked at trigger)

  const pointer = { x: 99, y: 99 };
  window.addEventListener('mousemove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });

  const REPEL = 0.55;
  const blobR = 0.86;
  const amp = reduced ? 0 : 0.14;

  // --- animation ----------------------------------------------------------------
  let rafId = 0;
  let running = false;

  function frame(ts) {
    rafId = requestAnimationFrame(frame);
    try {
      const time = ts * 0.001;

      const vFov = (camera.fov * Math.PI) / 180;
      const halfH = camera.position.z * Math.tan(vFov / 2);
      const halfW = halfH * camera.aspect;
      const scale = Math.min(halfW, halfH) * (isMobile ? 0.52 : 0.46);
      points.scale.setScalar(scale);

      // active section → side, vertical position, and target stage
      let side = 0.5, cyFrac = 0.5, activeStage = toKey;
      if (rows.length) {
        const mid = window.innerHeight / 2;
        let best = Infinity, rect = rows[0].getBoundingClientRect(), act = rows[0];
        for (const r of rows) {
          const rc = r.getBoundingClientRect();
          const c = rc.top + rc.height / 2;
          const dd = Math.abs(c - mid);
          if (dd < best) { best = dd; act = r; rect = rc; }
        }
        side = isMobile ? 0.5 : (act.dataset.text === 'left' ? 0.72 : act.dataset.text === 'right' ? 0.28 : 0.5);
        // Pin the object to a fixed on-screen spot instead of tracking the section's
        // scroll position — otherwise it drifts down as you scroll and then eases back
        // up to its rest spot ("scrolls with, then snaps back"). Centred vertically on
        // desktop; a touch lower on mobile so it sits clear of the stacked text.
        cyFrac = isMobile ? 0.6 : 0.5;
        if (STAGES[act.dataset.stage]) activeStage = act.dataset.stage;
      }
      // trigger a transition when the section's object changes
      if (activeStage !== toKey) {
        fromKey = toKey;
        toKey = activeStage;
        morph = 0;
        exitDir = points.position.x >= 0 ? 1 : -1; // lock the exit wall for this transition
      }
      morph = reduced ? 1 : Math.min(1, morph + MORPH_STEP);
      const crossed = !reduced && prevMorph < 0.5 && morph >= 0.5;
      prevMorph = morph;
      const inExit = morph < 0.5;
      const From = STAGES[fromKey], To = STAGES[toKey];

      // position: hold during exit, SNAP to the new spot during the off-screen swap, then
      // only track the scroll once settled — so the slide-in lands cleanly with no overshoot
      const tx = (side * 2 - 1) * halfW * 0.86;
      const ty = -(cyFrac * 2 - 1) * halfH * 0.9;
      if (crossed) {
        points.position.x = tx;
        points.position.y = ty;
      } else if (morph >= 1) {
        points.position.x += (tx - points.position.x) * 0.06;
        points.position.y += (ty - points.position.y) * 0.06;
      }

      // the whole object slides off one wall, vanishes, then slides in from the other wall
      const WALL = 1.35; // beyond the screen edge → fully off-screen
      const exitOff = (exitDir * halfW * WALL - points.position.x) / scale;
      const enterOff = (-exitDir * halfW * WALL - points.position.x) / scale;
      const exitP = smooth(clamp(morph * 2, 0, 1));        // 0→1 over first half
      const enterP = smooth(clamp((morph - 0.5) * 2, 0, 1)); // 0→1 over second half

      // fade the whole cloud out while it's "in the wall" so the side-swap is invisible
      const vis = reduced ? 1 : smooth(clamp((Math.abs(morph * 2 - 1) - 0.15) / 0.85, 0, 1));
      material.opacity = 0.92 * vis;

      const lx = (pointer.x * halfW - points.position.x) / scale;
      const ly = (pointer.y * halfH - points.position.y) / scale;

      const yaw = reduced ? 0 : Math.sin(time * 0.2) * SWAY;
      const cyaw = Math.cos(yaw), syaw = Math.sin(yaw);

      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        const dx = dirs[i3], dy = dirs[i3 + 1], dz = dirs[i3 + 2];

        let nr = 0;
        if (From.blob || To.blob) {
          const n =
            Math.sin(dx * 3.0 + time) * 0.5 +
            Math.sin(dy * 3.3 - time * 1.1) * 0.3 +
            Math.sin(dz * 2.7 + time * 0.7) * 0.2;
          nr = blobR + n * amp;
        }
        const fx = From.blob ? dx * nr : From.pos[i3];
        const fy = From.blob ? dy * nr : From.pos[i3 + 1];
        const fz = From.blob ? dz * nr : From.pos[i3 + 2];
        const tx2 = To.blob ? dx * nr : To.pos[i3];
        const ty2 = To.blob ? dy * nr : To.pos[i3 + 1];
        const tz2 = To.blob ? dz * nr : To.pos[i3 + 2];

        // exit holds the OLD shape sliding off; enter forms the NEW shape sliding in
        let bx, by, bz;
        if (inExit) {
          bx = fx + exitOff * exitP; by = fy; bz = fz;
        } else {
          bx = tx2 + enterOff * (1 - enterP); by = ty2; bz = tz2;
        }
        if (crossed) { // teleport whole object to the other wall while invisible
          current[i3] = tx2 + enterOff;
          current[i3 + 1] = ty2;
          current[i3 + 2] = tz2;
        }

        if (!reduced) {
          const sh = Math.sin(dx * 5 + time * 1.3) * Math.cos(dy * 5 - time) * SHIMMER;
          bx += dx * sh; by += dy * sh; bz += dz * sh;
        }

        const rx = bx * cyaw + bz * syaw;
        const rz = -bx * syaw + bz * cyaw;

        const e = EASE * spd[i];
        current[i3] += (rx - current[i3]) * e;
        current[i3 + 1] += (by - current[i3 + 1]) * e;
        current[i3 + 2] += (rz - current[i3 + 2]) * e;

        const ox = current[i3] - lx;
        const oy = current[i3 + 1] - ly;
        const dist = Math.sqrt(ox * ox + oy * oy);
        if (dist < REPEL) {
          const force = (1 - dist / REPEL) * 4;
          current[i3] += ox * 0.12 * force;
          current[i3 + 1] += oy * 0.12 * force;
        }

        arr[i3] = current[i3];
        arr[i3 + 1] = current[i3 + 1];
        arr[i3 + 2] = current[i3 + 2];
      }
      geometry.attributes.position.needsUpdate = true;

      // trails only while transitioning; settled object stays crisp
      const moving = clamp(1 - morph, 0, 1);
      fadeMat.opacity = moving < 0.02 ? 1 : lerp(1, 0.12, smooth(moving));
      renderer.render(fadeScene, fadeCam);
      renderer.render(scene, camera);
    } catch (err) {
      console.error('[liquid] frame error:', err);
      cancelAnimationFrame(rafId);
      running = false;
    }
  }

  function start() { if (!running) { running = true; rafId = requestAnimationFrame(frame); } }
  function stop() { running = false; cancelAnimationFrame(rafId); }
  start();
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.clear();
  });
}

/* ---- model loading + surface sampling -------------------------------------- */

function loadModelInto(file, targetArr, n, extraYaw = 0) {
  const url = MODEL_URLS['./models/' + file];
  if (!url) return;
  new GLTFLoader().load(
    url,
    (gltf) => {
      try {
        const geo = buildPositionGeometry(gltf.scene);
        if (!geo) return;
        normalizeGeometry(geo, FIT_SIZE);
        if (extraYaw) geo.rotateY(extraYaw); // per-model orientation tweak
        const sampler = new MeshSurfaceSampler(new THREE.Mesh(geo)).build();
        const p = new THREE.Vector3();
        for (let i = 0; i < n; i++) {
          sampler.sample(p);
          targetArr[i * 3] = p.x;
          targetArr[i * 3 + 1] = p.y;
          targetArr[i * 3 + 2] = p.z;
        }
        geo.dispose();
      } catch (e) {
        console.error('[liquid] could not sample model', file, e);
      }
    },
    undefined,
    (e) => console.warn('[liquid] could not load model', file, e)
  );
}

function buildPositionGeometry(root) {
  root.updateMatrixWorld(true);
  const geoms = [];
  root.traverse((o) => {
    if (o.isMesh && o.geometry && o.geometry.getAttribute('position')) {
      const src = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', src.getAttribute('position').clone());
      g.applyMatrix4(o.matrixWorld);
      geoms.push(g);
      if (src !== o.geometry) src.dispose();
    }
  });
  if (!geoms.length) return null;
  return geoms.length === 1 ? geoms[0] : mergeGeometries(geoms, false);
}

function normalizeGeometry(g, size) {
  g.computeBoundingBox();
  const c = new THREE.Vector3();
  const s = new THREE.Vector3();
  g.boundingBox.getCenter(c);
  g.boundingBox.getSize(s);
  const k = size / (Math.max(s.x, s.y, s.z) || 1);
  g.translate(-c.x, -c.y, -c.z);
  g.scale(k, k, k);
  if (MODEL_YAW) g.rotateY(MODEL_YAW); // correct the default sideways orientation
}

/* ---- helpers + procedural shapes ------------------------------------------- */

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }

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

function rotXY(p, ax, ay) {
  let [x, y, z] = p;
  const cx = Math.cos(ax), sx = Math.sin(ax);
  let y1 = y * cx - z * sx, z1 = y * sx + z * cx;
  y = y1; z = z1;
  const cy = Math.cos(ay), sy = Math.sin(ay);
  let x1 = x * cy + z * sy, z2 = -x * sy + z * cy;
  return [x1, y, z2];
}

function roundedBox(d, hx, hy, hz, round) {
  const ax = Math.abs(d[0]), ay = Math.abs(d[1]), az = Math.abs(d[2]);
  const m = Math.max(ax / hx, ay / hy, az / hz) || 1e-6;
  const bx = d[0] / m, by = d[1] / m, bz = d[2] / m;
  const ex = d[0] * hx, ey = d[1] * hy, ez = d[2] * hz;
  return [lerp(bx, ex, round), lerp(by, ey, round), lerp(bz, ez, round)];
}

function laptopTarget(d) {
  let [x, y, z] = roundedBox(d, 1.25, 0.14, 0.92, 0.34);
  const hinge = -0.12;
  if (z < hinge) {
    const a = 1.42;
    const ca = Math.cos(a), sa = Math.sin(a);
    const Y0 = y, Z0 = z - hinge;
    y = Y0 * ca - Z0 * sa;
    z = Y0 * sa + Z0 * ca + hinge;
  }
  return rotXY([x, y - 0.12, z], -0.42, 0.5);
}

function tabletTarget(d) {
  return rotXY(roundedBox(d, 0.66, 0.92, 0.05, 0.2), -0.12, 0.45);
}

function phoneTarget(d) {
  return rotXY(roundedBox(d, 0.4, 0.82, 0.055, 0.22), -0.08, 0.42);
}

function watchTarget(d) {
  return rotXY(roundedBox(d, 0.34, 0.4, 0.1, 0.4), -0.1, 0.4);
}

// a tilted ring/torus — reads as a "process loop" for the Approach section
function torusTarget(d) {
  const theta = Math.atan2(d[2], d[0]);
  const phi = Math.atan2(d[1], Math.hypot(d[0], d[2]));
  const R = 0.85, r = 0.34;
  const ring = R + r * Math.cos(phi);
  return rotXY([ring * Math.cos(theta), r * Math.sin(phi), ring * Math.sin(theta)], -0.55, 0.0);
}
