# Software factories con IA

Píldora de **45 minutos** para Factoría F5 (español, público con pocos conocimientos de
programación): cómo la IA ha llegado a las *software factories* y por qué fracasan si se
apaga el criterio humano. Inspirada en el talk de Dex Horthy (HumanLayer),
*«Harness Engineering is not enough: why software factories fail»* (AI Engineer World's Fair 2026).

**Estado: en construcción.** Baraja reveal.js en `docs/index.html` — se abre en el navegador
(flechas o teclado). La píldora anterior de Docker/microservicios está retirada:
recuperable con `git checkout pildora-docker`.

## Estructura de la charla (45', 4 bloques)

1. **INTRO · Cronología (10')** — gancho «un individuo puede automatizar y replicar una
   empresa entera» + roadmap 1969→2026: el concepto de *software factory* (Hitachi), las
   completions (Tabnine), Copilot, ChatGPT, multi-agentes, agent loops, CLI harness,
   vibe coding, Ralph loop, SDD — hasta las factories de hoy.
2. **SDLC (13')** — el ciclo **tal como lo dibuja Dex Horthy** («A Software Factory
   Circa 2022»), revelado progresivo por fases con tabla de transiciones `from → to`,
   y microservicios en clave ligera.
3. **La IA en el SDLC (12')** — light factory vs dark factory, los datos (Faros AI,
   FrontierCode, SlopCodeBench, Alera), la causa (la mantenibilidad no está en la
   recompensa), y las 4 fases de Dex para encender las luces. **Pendiente de construir.**
4. **Kahoot (8')** — 10 preguntas vía MCP. **Pendiente de crear.**
   **Cierre (2')** — recap + fuentes. **Pendiente.**

## Qué hay en el repo

| Ruta | Contenido |
|------|-----------|
| `docs/index.html` | La baraja (reveal.js + fuentes locales). **En construcción** — faltan los bloques 3, Kahoot y cierre. |
| `AGENTS.md` | Objetivo, estructura y fuentes de la charla (leer primero). |
| `docs/SOURCES.md` | Las 15 fuentes con estado de extracción. |
| `docs/data/` | Extracción de datos fuente a fuente (01–16), incluida la tabla comparativa y las métricas SWE-bench. |
| `docs/data/roadmap-evolucion.md` | El roadmap en Mermaid (revisión de contenido) + render usado. |
| `docs/assets/img/` | Diagramas (Dex, aran.dev), imágenes de la charla, roadmap renderizado. |
| `tools/` | Pipeline: `capturas.mjs` (screenshots + notas), `export_pdf.sh` (PDF), `roadmap-slide.mjs` (regenera el roadmap-imagen), `spot.mjs`/`node -e` para checks puntuales. |

## Cómo trabajar con la baraja

```bash
# verla: abrir docs/index.html en el navegador (o:)
cd docs && python3 -m http.server 8000   # → http://localhost:8000

# regenerar el roadmap-imagen (tras editar tools/roadmap-slide.mjs):
cd tools && node roadmap-slide.mjs

# PDF (al cerrar la baraja):
cd tools && node capturas.mjs && ./export_pdf.sh
```

## Pendiente

- Bloque 3 «La IA en el SDLC» (~6 diapositivas), Kahoot (vía MCP — servidor configurado
  en `~/.zcode/cli/config.json`), cierre + fuentes, timer HUD, `docs/notas-orador.md`,
  revisión del autor, export PDF y publicación (Pages) **solo cuando el autor lo diga**.
