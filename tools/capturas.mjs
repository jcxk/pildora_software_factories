// Captura cada diapositiva del deck (docs/deck/index.html) a PNG 1280x720 @2x.
// Uso:  node capturas.mjs [salida]      ·  HIDE_HUD=1 para capturar sin el timer HUD.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const OUT = process.argv[2] ?? 'out/slides';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});
await page.goto('file://' + path.resolve('../docs/deck/index.html'), { waitUntil: 'networkidle' });
await page.evaluate(() => {
  Reveal.configure({ transition: 'none', progress: false, autoSlide: 0 });
});
if (process.env.HIDE_HUD) {
  await page.evaluate(() => document.getElementById('timer-hud')?.remove());
}
const total = await page.evaluate(() => Reveal.getTotalSlides());
const notes = [];
for (let i = 0; i < total; i++) {
  await page.evaluate((n) => Reveal.slide(n), i);
  await page.waitForTimeout(250);
  const note = await page.evaluate(() => {
    const a = Reveal.getCurrentSlide().querySelector('aside.notes');
    return a ? a.textContent.trim().replace(/\s+\n/g, '\n') : '';
  });
  notes.push(note);
  await page.screenshot({ path: `${OUT}/slide-${String(i + 1).padStart(2, '0')}.png` });
  console.log(`slide ${i + 1}/${total} ✓`);
}
await browser.close();
import { writeFileSync } from 'node:fs';
writeFileSync(`${OUT}/notes.json`, JSON.stringify(notes, null, 2));
console.log('notas guardadas en', `${OUT}/notes.json`);
