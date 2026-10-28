# Kahoot — Software factories con IA

> **Estado:** preguntas redactadas y aprobadas — **pendiente de crear en Kahoot vía MCP**
> (servidor `kahoot` configurado en `~/.zcode/cli/config.json` → `https://mcp.kahoot.it/mcp`).
> Bloque 4 de la charla · 8 minutos · 9 preguntas sobre los 3 bloques (con 10ª de recambio en suplentes).

## Parámetros del quiz

- **Título:** Software factories con IA
- **Tiempo por pregunta:** 20 s (9 × ~45 s con explicación ≈ 7' de los 8' del bloque)
- **Puntuación:** estándar · **Imágenes:** opcionales (candidatas: `docs/assets/img/roadmap-slide.png`, `addy-loop-harness-factory.svg`)
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

**4. Los microservicios cambian simplicidad inicial por…** — diapositiva 08
- ✅ escalabilidad y resiliencia
- más velocidad de CPU
- menos código
- cero configuración

**5. Los dos pasos del SDLC que más tardan (horas o días) son…** — diapositiva 09
- ✅ construir (build) y revisar (review)
- diseñar y desplegar
- testear y documentar
- planificar y vender

## Bloque 3 · La IA en el ciclo

**6. Cuando el agente construye, el cuello de botella pasa a ser…** — diapositiva 11
- ✅ el review — un humano sigue leyendo y probando
- el modelo de IA
- la red
- el billing

**7. ¿Qué añade el harness al loop?** — diapositiva 06
- ✅ sandbox, tools, memory y gates (paredes y una puerta)
- más tokens
- un modelo mayor
- otro agente

**8. ¿Cuál es la FASE 1 de las 4 fases para encender las luces?** — diapositiva 20
- ✅ Product requirements
- System architecture
- Program design
- Vertical slices

**9. Una «lights-off software factory» es una donde…** — diapositiva 16
- ✅ nadie revisa el código: los agentes fusionan solos
- solo se programa de noche
- no hay clientes
- el código es abierto

## Suplentes (por si se cambia alguna)

- **¿Según Faros AI (22.000 devs), los incidentes por pull request se han…?** — ✅ multiplicado ×3,5 (+242,7%) · reducido a la mitad · quedado igual · desaparecido (diapositiva 18)
- **¿Qué frase cierra la estación 3?** — ✅ «Read the dang code.» · «Move fast and break things» · «Ship it» · «Trust the loop» (diapositiva 20)
- **¿Dónde drenan todos los bucles de una factory?** — ✅ en una sola puerta: review/merge → prod · en varios repos independientes · en el backlog · en el modelo (diapositiva 21)
