import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './public/fotos';
const outputDir = './public/fotos-web';

mkdirSync(outputDir, { recursive: true });

const exts = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];
const files = readdirSync(inputDir).filter(f => exts.includes(extname(f)));

console.log(`Comprimiendo ${files.length} imágenes...`);

for (const file of files) {
  const input = join(inputDir, file);
  const name = basename(file, extname(file));
  const output = join(outputDir, `${name}.webp`);

  await sharp(input)
    .resize(1600, 1067, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);

  const { size } = await sharp(output).metadata().then(() =>
    import('fs').then(fs => fs.default.statSync(output))
  );
  console.log(`  ✓ ${file} → ${name}.webp (${(size / 1024).toFixed(0)} KB)`);
}

console.log('\n¡Listo! Imágenes optimizadas en public/fotos-web/');
