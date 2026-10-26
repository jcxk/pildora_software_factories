# Charla «Software factories con IA»

Píldora de **45'** para Factoría F5, en **español** (términos técnicos en inglés, definidos la primera vez). Público con pocos conocimientos de programación.

## Objetivo

Explicar cómo la IA ha llegado a las *software factories* y por qué fracasan si se apaga el criterio humano. Postura: **evolución + advertencia honesta**, siguiendo la tesis de Dex Horthy (HumanLayer): *«Harness engineering is not enough: why software factories fail»*, AI Engineer World's Fair 2026.

## Estructura (45')

1. **Gancho (3')** — «Un individuo puede automatizar y replicar una empresa entera».
2. **Evolución de la IA (12')** — cronológica, con fechas y referencia por etapa, todas las etapas (1969 Hitachi → 2018 completions → … → 2025 software factories). Nada inventado.
3. **SDLC (10')** — las fases **tal como las dibuja el video**, no las de manual. Dibujo clave: `docs/assets/img/lifecycle-dex-horthy.png` ([fuente](https://ai.engineer/api/talk-essay-media/7e04c355fb4c01e246b4da3fd75f4cb279d013767d449fb02e828f76f386b73d)), «A Software Factory Circa 2022»:
   USERS → complaints / feature requests → CEO / Vision → Product Managers → Engineers → stuff to do → someone builds the thing (automated + manual testing) → Pull request (ci/cd checks, unit testing, static scanning, security checks · human tests · human reviews) → rollout / deployment → PROD → MONITORING → incidents → vuelta a Engineers.
   Bucles: architecture proposal + sprint planning (LOOP), PR ↔ build (LOOP #1), users ↔ vision (LOOP #2). Tiempos: *build: hours or days · review: hours or days*; objetivo: *decrease % chance of rework, reduce review time*.
4. **Por qué fracasan (10')** — datos, causa (la mantenibilidad no está en la recompensa del entrenamiento), modos de fallo, salida: encender las luces.
5. **Kahoot (8')** — 10 preguntas sobre los tres bloques. Sin demo en vivo.
6. **Cierre (2')** — recap + fuentes.

## Formato

- Baraja reveal.js en `docs/` (Pages-ready), export a PDF; mismo pipeline (`tools/`) y **timer HUD** por diapositiva.
- Tema **neutro y oscuro**, motivo visual **línea de montaje**. Sin referencias a *Origen/Inception*, sin meme.
- Notas de orador con tiempos en cada diapositiva. Diapositiva final de fuentes.
- Nada se publica (push/Pages) hasta que el autor lo diga.

## Fuentes de partida

- Talk: https://ai.engineer/talks/Ib5GBkD555M-harness-engineering-is-not-enough-why-software-factories-fail · video: https://www.youtube.com/watch?v=Ib5GBkD555M
- Ensayo/transcripción: https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md
