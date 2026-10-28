# Software factories con IA

Píldora de **45 minutos** para Factoría F5 (español, público con pocos conocimientos de
programación): cómo la IA ha llegado a las *software factories* y por qué fracasan si se
apaga el criterio humano. Inspirada en el talk de Dex Horthy (HumanLayer),
*«Harness Engineering is not enough: why software factories fail»* (AI Engineer World's Fair 2026).

**Estado: en construcción.** La **presentación** (reveal.js) está en `docs/deck/index.html` —
la raíz de Pages es una **portada** (`docs/index.html`) que enlaza a la presentación y al PDF.
**Publicada en GitHub Pages:** <https://jcxk.github.io/pildora_software_factories/>
(desde `docs/`) · presentación directa: `/deck/` · PDF: `/pdf/software-factories-con-ia.pdf`.
La píldora anterior de Docker/microservicios está retirada:
recuperable con `git checkout pildora-docker`.

## Estructura de la charla (45', 4 bloques)

1. **INTRO · Cronología (10')** — gancho «un individuo puede automatizar y replicar una
   empresa entera» + roadmap 1969→2026: la primera *software factory* (Hitachi, 1969;
   término acuñado en la OTAN, 1968), las
   completions (Tabnine), Copilot, ChatGPT, multi-agentes, agent loops, CLI harness,
   vibe coding, Ralph loop, SDD — hasta las factories de hoy.
2. **SDLC (13')** — el ciclo **tal como lo dibuja Dex Horthy** («A Software Factory
   Circa 2022»), revelado progresivo por fases con tabla de transiciones `from → to`,
   y microservicios en clave ligera.
3. **La IA en el SDLC (12')** — light factory vs dark factory, los datos (Faros AI,
   FrontierCode, SlopCodeBench, Alera), la causa (la mantenibilidad no está en la
   recompensa), y las 4 fases de Dex para encender las luces. **Construido** (diapositivas
   10–20): arco lights-off de Dex, datos Faros, la causa y las 4 fases.
4. **Kahoot (8')** — ✅ **creado en Kahoot vía MCP**: quiz de 9 preguntas
   (+3 suplentes) · 20 s/pregunta · doble-puntos en la 3 y la 7. UUID
   `f51c3152-6353-4f3d-a681-310fdaa30225`. Las preguntas viven en el fichero local
   `docs/kahoot-preguntas.local.md` (privadas — ver `.gitignore`). Pendiente manual:
   marcar el doble-puntos en el editor de Kahoot (la API no lo soporta).
   **Cierre (2')** — recap + fuentes. **Construido** (recap + anexo 3 del ecosistema
   open source + fuentes: diapositivas 21–23).

## Qué hay en el repo

| Ruta | Contenido |
|------|-----------|
| `docs/index.html` | **Portada** de Pages: enlaza a la presentación HTML y al PDF (tema oscuro, motivo de línea de montaje). |
| `docs/deck/index.html` | La baraja (reveal.js + fuentes locales, en `docs/deck/assets/`). **En construcción** — bloques 1–3 y cierre construidos (diapositivas 01–23); Kahoot ya creado en Kahoot (falta doble-puntos manual). |
| `docs/kahoot-preguntas.local.md` | *(local, gitignored)* Las preguntas del Kahoot (+ suplentes, doble-puntos y UUID del quiz creado). No está en GitHub a propósito. |
| `AGENTS.md` | Objetivo, estructura y fuentes de la charla (leer primero). |
| `docs/SOURCES.md` | Las fuentes con estado de extracción (incl. awesome-software-factories → anexo 3). |
| `docs/data/` | Extracción de datos fuente a fuente (01–16), incluida la tabla comparativa y las métricas SWE-bench. |
| `docs/data/roadmap-evolucion.md` | El roadmap en Mermaid (revisión de contenido) + render usado. |
| `docs/deck/assets/img/` | Diagramas (Dex, aran.dev), imágenes de la charla, roadmap renderizado. |
| `docs/pdf/` | El PDF exportado de la baraja (`software-factories-con-ia.pdf`, 23 páginas). |
| `tools/` | Pipeline: `capturas.mjs` (screenshots + notas; `HIDE_HUD=1` sin timer), `export_pdf.sh` (PDF a `docs/pdf/`), `roadmap-slide.mjs` (regenera el roadmap-imagen), `spot.mjs`/`node -e` para checks puntuales. |

## Cómo trabajar con la baraja

```bash
# verla: abrir docs/deck/index.html en el navegador (o:)
cd docs/deck && python3 -m http.server 8000   # → http://localhost:8000

# temporizador (HUD abajo-izquierda): clic = iniciar/pausar · ↺ = reset · tecla T = ocultar/mostrar

# regenerar el roadmap-imagen (tras editar tools/roadmap-slide.mjs):
cd tools && node roadmap-slide.mjs

# regenerar el PDF (auto-captura sin HUD → docs/pdf/):
cd tools && ./export_pdf.sh
```

## Pendiente

- Bloque 3 «La IA en el SDLC» construido (diapositivas 10–20: arco lights-off de Dex,
  datos Faros, la causa y las 4 fases).
- Kahoot: ✅ creado vía MCP — quiz `f51c3152-6353-4f3d-a681-310fdaa30225`
  (9 preguntas, 20 s). Pendiente: doble-puntos manual en las preguntas 3 y 7 desde
  <https://create.kahoot.it/creator/f51c3152-6353-4f3d-a681-310fdaa30225>.
- `docs/notas-orador.md` (volcar los `aside.notes`/`notes.json`), revisión del autor
  y export PDF (`tools/capturas.mjs` + `export_pdf.sh`).
