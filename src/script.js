import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// --- SETUP -----------------------------------------------------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 150);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- PARTICLE SETUP --------------------------------------------------------------
const PARTICLE_COUNT = 15000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(PARTICLE_COUNT * 3);
const colors = new Float32Array(PARTICLE_COUNT * 3);

const initialPositions = new Float32Array(PARTICLE_COUNT * 3);
const targetPositions = new Float32Array(PARTICLE_COUNT * 3);

const colorPalette = [
  new THREE.Color(0xffffff),
  new THREE.Color(0xe5e5e5),
  new THREE.Color(0xcfcfcf),
];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;

  // base spherical distribution
  const r = Math.random() * 140 + Math.random() * 40; // uneven radius
  const t = Math.random() * Math.PI * 2;
  const p = Math.acos(Math.random() * 2 - 1);

  let x = r * Math.sin(p) * Math.cos(t);
  let y = r * Math.sin(p) * Math.sin(t);
  let z = r * Math.cos(p);

  // roughness noise (brush-like breakup)
  const n = 8;
  x += (Math.random() - 0.5) * n;
  y += (Math.random() - 0.5) * n;
  z += (Math.random() - 0.5) * n;

  initialPositions[i3] = x;
  initialPositions[i3 + 1] = y;
  initialPositions[i3 + 2] = z;

  positions[i3] = x;
  positions[i3 + 1] = y;
  positions[i3 + 2] = z;

  const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  colors[i3] = c.r;
  colors[i3 + 1] = c.g;
  colors[i3 + 2] = c.b;
}


geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 0.6,
  vertexColors: true,
  transparent: true,
  depthWrite: false,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// --- TEXT SAMPLING ---------------------------------------------------------------
function sampleTextToPoints(text) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = 'bold 100px Arial';
  ctx.font = font;

  const m = ctx.measureText(text);
  canvas.width = Math.ceil(m.width);
  canvas.height = 120;

  ctx.font = font;
  ctx.fillStyle = '#fff';
  ctx.fillText(text, 0, 100);

  const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pts = [];

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      if (img.data[(y * img.width + x) * 4 + 3] > 128) {
        pts.push({
          x: x - canvas.width / 2,
          y: -(y - canvas.height / 2),
        });
      }
    }
  }
  return pts;
}

const textPoints = sampleTextToPoints('AMONGUS');

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  const p = textPoints[i % textPoints.length];

  targetPositions[i3] = p.x;
  targetPositions[i3 + 1] = p.y;
  targetPositions[i3 + 2] = (Math.random() - 0.5) * 10;
}
// --- INTERACTION -----------------------------------------------------
const mouse = new THREE.Vector2();
const mouseWorld = new THREE.Vector3();

const raycaster = new THREE.Raycaster();
const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // z = 0

function updatePointer(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  mouse.x = x * 2 - 1;
  mouse.y = -(y * 2 - 1);

  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, mouseWorld);
}

window.addEventListener('mousemove', updatePointer);
window.addEventListener('touchmove', e => updatePointer(e.touches[0]), { passive: true });




let intro = 0;

function animate() {
  requestAnimationFrame(animate);

  intro = Math.min(intro + 0.01, 1);

  const arr = particles.geometry.attributes.position.array;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;

    // ease toward logo
    arr[i3] += (targetPositions[i3] - arr[i3]) * 0.04 * intro;
    arr[i3 + 1] += (targetPositions[i3 + 1] - arr[i3 + 1]) * 0.04 * intro;
    arr[i3 + 2] += (targetPositions[i3 + 2] - arr[i3 + 2]) * 0.04 * intro;

    // mouse disruption
const dx = arr[i3] - mouseWorld.x;
const dy = arr[i3 + 1] - mouseWorld.y;
const d = Math.sqrt(dx * dx + dy * dy);

if (d < 40) {
  const force = (1 - d / 40) * 4;
  arr[i3] += dx * 0.1 * force;
  arr[i3 + 1] += dy * 0.1 * force;
}

  }

  particles.geometry.attributes.position.needsUpdate = true;
  controls.update();
  renderer.render(scene, camera);
}

animate();

// --- RESIZE ---------------------------------------------------------------------
window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  renderer.setSize(w, h, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

