/**
 * clean-root.mjs  (runs as `prebuild`)
 * ------------------------------------------------------------------
 * The production build is emitted to the repo ROOT with `emptyOutDir:false`
 * (so it never deletes src/, node_modules/, .git/, etc). The downside is that
 * old hashed bundles in root/assets would otherwise pile up across builds.
 * This clears them out before each build so only the current bundle remains.
 */
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

await rm(join(root, 'assets'), { recursive: true, force: true });
await rm(join(root, 'dist'), { recursive: true, force: true }); // legacy build dir

console.log('[clean] removed stale root/assets and legacy dist/');
