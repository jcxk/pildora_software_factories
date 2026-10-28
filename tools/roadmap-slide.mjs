import { chromium } from 'playwright';
// Línea A (arriba): orígenes → 2023 · Línea B (abajo): 2025 → 2026
const lineaA = [
 ['1968','«SOFTWARE FACTORY»','término: OTAN · 1ª fábrica: Hitachi (1969)'],
 ['2021','IA PROGRAMA','Copilot — tras Tabnite 18 · GPT-3 20'],
 ['2022','IA MAINSTREAM','ChatGPT — el chat para todos'],
 ['2023','MULTI-AGENTES','MetaGPT · AutoGen · CrewAI'],
];
const lineaB = [
 ['2024','AGENT LOOPS','Devin · MCP — planifica · ejecuta · observa'],
 ['2025','CLI HARNESS','Claude Code · opencode — workflows R→P→I'],
 ['FEB 25','VIBE CODING','nace el término — Karpathy'],
 ['JUL 25','RALPH LOOP','el loop al extremo: prompt infinito'],
 ['SEP 25','SDD','Kiro · Spec Kit · Tessl'],
 ['2026','SOFTWARE FACTORIES','🔥 loops en todas las estaciones'],
];
const st = (cx, beltY, anyo, nombre, sub, o = {}) => `
  <div style="position:absolute; left:0; top:0;">
    <div class="nodo ${o.hecho ? 'hecho-n' : ''}" style="left:${cx - (o.hecho ? 13 : 18)}px; top:${beltY - (o.hecho ? 13 : 18)}px;${o.hoy ? 'border-color:#f0b429;box-shadow:0 0 24px rgba(240,180,41,.55);' : ''}"></div>
    <div class="${o.b ? 'tb' : 'ta'}" style="top:${beltY + 24}px; left:${cx - (o.b ? 125 : 195)}px; width:${o.b ? 250 : 390}px;">
      <div class="mes" ${o.hoy ? 'style="color:#f0b429"' : ''}>${anyo}</div>
      <div class="nombre" ${o.hoy ? 'style="color:#e8ecff"' : ''}>${nombre}</div>
      <div class="sub">${sub}</div>
    </div>
  </div>`;
const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
  *{margin:0;box-sizing:border-box;font-family:'Space Grotesk',system-ui,sans-serif}
  body{width:1780px;height:820px;background:#0b1026;position:relative;overflow:hidden;
       background-image:radial-gradient(900px 400px at 50% 0%,#1a2452 0%,transparent 70%)}
  .cinta{position:absolute;height:6px;border-radius:3px}
  .cinta.a{left:120px;width:1580px;background:linear-gradient(90deg,#263058,#3a4478 80%,#4a5490)}
  .cinta.b{left:120px;width:1580px;background:linear-gradient(90deg,#3a4478,#5a4478 50%,#f0b429)}
  .cinta::after{content:'';position:absolute;inset:0;border-radius:3px;
       background:repeating-linear-gradient(90deg,transparent 0 26px,rgba(11,16,38,.55) 26px 34px)}
  .etiqueta{position:absolute;left:120px;font:600 15px 'JetBrains Mono',monospace;
       letter-spacing:.25em;color:#5b6798}
  .mes{font:700 30px 'Space Grotesk',sans-serif;color:#e8ecff}
  .nombre{font-size:21px;font-weight:700;color:#f0b429;letter-spacing:.05em;margin-top:4px}
  .sub{font-size:16px;color:#8b93b8;margin-top:5px;line-height:1.3}
  .hecho .mes{font:700 16px 'JetBrains Mono',monospace;color:#8b93b8;letter-spacing:.18em}
  .hecho .nombre{font-size:19px}
  .hecho .sub{font-size:14px}
  .nodo{border-radius:50%;position:absolute;background:#151d42;border:3px solid #4a5490;z-index:2}
  .nodo.hecho-n{width:26px;height:26px;border:2px dashed #4a5490;background:#0d1330}
  .conector{position:absolute;right:64px;top:216px;width:4px;height:296px;border-radius:2px;
       background:repeating-linear-gradient(180deg,#3a4478 0 12px,transparent 12px 22px)}
  .conector::after{content:'';position:absolute;bottom:-12px;left:-7px;
       border-left:9px solid transparent;border-right:9px solid transparent;border-top:14px solid #3a4478}
  .leyenda{position:absolute;right:84px;bottom:18px;font:500 15px 'JetBrains Mono',monospace;color:#8b93b8}
  .leyenda b{color:#e8ecff}
  .ta{position:absolute;text-align:center}
  .tb{position:absolute;text-align:center}
  .tb .mes{font-size:24px}
  .tb .nombre{font-size:17px}
  .tb .sub{font-size:13px}
</style></head><body>
<div class="cinta a" style="top:210px;"></div>
<div class="etiqueta" style="top:150px;">LÍNEA A · ORÍGENES</div>
${lineaA.map((a,i)=>st(120+1580/4*(i+0.5), 210, a[0], a[1], a[2])).join('')}
<div class="conector"></div>
<div class="cinta b" style="top:560px;"></div>
<div class="etiqueta" style="top:500px;">LÍNEA B · EL PRESENTE</div>
${lineaB.map((b,i)=>st(120+1580/6*(i+0.5), 560, b[0], b[1], b[2], {hecho: b[0].includes(' 25'), hoy: b[0]==='2026', b:true})).join('')}
<div class="leyenda"><b>■</b> hito&nbsp;&nbsp;<b>◌</b> hecho relevante 2025&nbsp;&nbsp;<b>▬</b> continúa abajo →</div>
</body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1780,height:820}, deviceScaleFactor:2 });
await p.setContent(html, { waitUntil:'networkidle' });
await p.waitForTimeout(300);
await p.screenshot({ path: '../docs/assets/img/roadmap-slide.png' });
await b.close(); console.log('roadmap 2 líneas v2 OK');
