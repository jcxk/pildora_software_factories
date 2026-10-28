# Kahoot — Software factories con IA

> **Estado:** preguntas redactadas y aprobadas en borrador — **pendiente de crear en Kahoot vía MCP**
> (servidor `kahoot` configurado en `~/.zcode/cli/config.json` → `https://mcp.kahoot.it/mcp`).
> Bloque 4 de la charla · 8 minutos · 10 preguntas sobre los 3 bloques.

## Parámetros del quiz

- **Título:** Software factories con IA
- **Tiempo por pregunta:** 20 s (10 × ~45 s con explicación ≈ 7,5' de los 8' del bloque)
- **Puntuación:** estándar · **Imágenes:** opcionales (candidatas: `docs/assets/img/roadmap-slide.png`, `dex-lights-off-no-review.jpg`, `addy-loop-harness-factory.svg`)
- **Presentación:** en vivo tras la diapositiva 20 («Read the dang code.»), antes del cierre

## Bloque 1 · Cronología

**1. ¿Dónde nace el concepto de «software factory» (1969)?** — diapositiva 04
- ✅ Hitachi, en Japón
- Ford, en EE.UU.
- IBM, en 1981
- Google, en 1998

**2. ¿Qué lanzó GitHub en 2021 para autocompletar código?** — diapositiva 04
- ✅ GitHub Copilot
- ChatGPT
- Devin
- Tabnine

**3. El «Ralph loop» es…** — diapositiva 05
- ✅ un bucle infinito (`while true`) que alimenta a un agente
- un robot de la fábrica FANUC
- el nombre del CEO de HumanLayer
- un modelo de Anthropic

## Bloque 2 · El SDLC

**4. Según el dibujo de Dex (2022), el ciclo tiene…** — diapositiva 09
- ✅ 12 transiciones y 3 bucles
- 5 transiciones y 1 bucle
- 20 transiciones y ningún bucle
- 3 transiciones y 12 bucles

**5. Los dos pasos que tardaban «horas o días» en 2022 eran…** — diapositiva 09
- ✅ construir (build) y revisar (review)
- diseñar y desplegar
- testear y documentar
- planificar y vender

**6. Los microservicios cambian simplicidad inicial por…** — diapositiva 08
- ✅ escalabilidad y resiliencia
- más velocidad de CPU
- menos código
- cero configuración

## Bloque 3 · La IA en el ciclo

**7. En la fábrica agéntica solo cambia una pieza. ¿Cuál?** — diapositiva 10
- ✅ «someone builds the thing» → «an agent builds the thing»
- desaparece production
- sobra monitoring
- se elimina al usuario

**8. Cuando el agente construye, el cuello de botella pasa a ser…** — diapositiva 11
- ✅ el review — un humano sigue leyendo y probando
- el modelo de IA
- la red
- el billing

**9. Una «lights-off software factory» es una donde…** — diapositiva 16
- ✅ nadie revisa el código: los agentes fusionan solos
- solo se programa de noche
- no hay clientes
- el código es abierto

**10. Según Faros AI (22.000 devs), los incidentes por pull request se han…** — diapositiva 18
- ✅ multiplicado ×3,5 (+242,7%)
- reducido a la mitad
- quedado igual
- desaparecido

## Suplentes (por si se cambia alguna)

- **¿Cuál es la FASE 1 de las 4 de Dex?** — ✅ Product requirements · System architecture · Program design · Vertical slices (diapositiva 20)
- **¿Qué frase cierra la estación 3?** — ✅ «Read the dang code.» · «Move fast and break things» · «Ship it» · «Trust the loop» (diapositiva 20)
- **¿Qué añade el harness al loop?** — ✅ sandbox, tools, memory y gates · más tokens · un modelo mayor · otro agente (diapositiva 06)
- **¿Cuánto tardaba construir en 2022 vs con agentes?** — ✅ de horas/días a minutos/horas · sigue igual · de minutos a días · de segundos a horas (diapositiva 11)
