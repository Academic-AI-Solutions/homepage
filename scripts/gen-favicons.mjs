// Regenerates the raster favicon assets from public/favicon.svg.
// Run with: node scripts/gen-favicons.mjs
// Dev-only deps: @resvg/resvg-js (SVG->PNG), png-to-ico (PNG->ICO).
// The source SVG carries its own white background, so PNGs are white-backed
// and need no extra compositing.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = (name) => resolve(root, 'public', name);
const svg = readFileSync(pub('favicon.svg'));

const renderPng = (size) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();

// Standalone PNGs (apple-touch + PWA manifest icons).
const pngTargets = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];
for (const [name, size] of pngTargets) {
  writeFileSync(pub(name), renderPng(size));
  console.log(`wrote public/${name} (${size}x${size})`);
}

// Multi-resolution favicon.ico (16/32/48).
const ico = await pngToIco([renderPng(16), renderPng(32), renderPng(48)]);
writeFileSync(pub('favicon.ico'), ico);
console.log('wrote public/favicon.ico (16,32,48)');
