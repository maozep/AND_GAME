const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SVG = fs.readFileSync(path.join(__dirname, '..', 'icon.svg'));

const targets = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' }, // iOS home screen
  { size: 32,  name: 'favicon-32.png' },
  { size: 16,  name: 'favicon-16.png' },
];

(async () => {
  for (const { size, name } of targets) {
    const out = path.join(__dirname, '..', name);
    await sharp(SVG, { density: 384 })
      .resize(size, size, { fit: 'contain', background: { r: 10, g: 14, b: 20, alpha: 1 } })
      .png()
      .toFile(out);
    console.log('  ✓', name, size + 'x' + size);
  }
})().catch(e => { console.error(e); process.exit(1); });
