import { defineConfig } from 'vite';

// The source app lives in src/ (index.html + script.js + style.css).
// GitHub Pages serves this repo from its ROOT (custom domain, base '/'),
// so the production build is emitted straight to the repo root.
//
// Keeping the source entry (src/index.html) separate from the generated
// root index.html is what prevents the build from ever overwriting its own
// source — the drift that previously left the deployed bundle out of sync.
export default defineConfig({
  base: '/',
  root: 'src',
  // treat 3D models dropped into src/models/ as bundled assets
  assetsInclude: ['**/*.glb'],
  // No static public assets are referenced by the page; project images go in
  // src/work/ so Vite hashes them. Disabling publicDir also avoids the
  // "publicDir inside outDir" warning caused by building into the repo root.
  publicDir: false,
  build: {
    outDir: '../',
    emptyOutDir: false, // never wipe the repo root; stale assets cleaned by prebuild
    rollupOptions: {
      output: {
        // stable folder, hashed filenames
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
