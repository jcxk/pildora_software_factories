# Alera Library Factory (Recursive AI)

- **Fuente:** https://recursiveai.org/research/alera-library-factory/
- **Autor:** Kurtis Welch
- **Fecha:** 23 de octubre de 2026
- **Estado:** extraída

## Datos clave

### Qué es Alera
- Sistema para producir **librerías open source con intervención mínima del propietario**: se le indica el tipo de librería y el lenguaje objetivo; la escribe desde cero en el idioma propio del lenguaje, la publica en GitHub y la evalúa con **tests externos**.
- Construida por Kurtis Welch en ~10 meses, tras 2 años trabajando con agentes.
- Tres componentes: **agentes especializados** (planner, project manager, build orchestrator, engineers, independent reviewers), un **proceso opinado** horneado en prompts compartidos, y una **arquitectura fija** (from-scratch, sin dependencias más allá del lenguaje base, juzgada por tests externos, con las derrotas publicadas).

### Las cuatro ejecuciones (26 sep – 23 oct 2026)
| Run | Librería | Primer msg → 1.0 | Mensajes del dueño | Horas reloj con mensaje |
|---|---|---|---|---|
| 1 | oneyaml-rust | 9 d 5 h | 112 | 34 |
| 2 | oneyaml-go + oneyaml-csharp (+ oneyaml-kit) | 3 d 21 h | 108 | 23 |
| 3 | oneimage-csharp | 22 h 56 min | 14 | 4 |
| 4 | onepdf-csharp | 17 h 27 min | 11 (8 estrictos) | 3 |

- Las horas de atención humana cayeron **de 34 a 3** entre el primer y el cuarto run. Una quinta ejecución (oneocr-csharp) empezó el 23 de octubre.

### Pipeline por ciclo
- Ciclo: **Run → Collect** (terminar/publicar) **→ Refine the factory → next go-ahead**. La fábrica se afina entre corridas con retrospectivas cortas.
- Ciclo 1: ~1 h 10 min de refinado (análisis de tiempos: ~64% del tiempo de implementers/reviewers era **esperar comandos** → tests dirigidos, gates por niveles, sin estimaciones de tiempo).
- Ciclo 2: 3 h 45 min de revisión → un PM por proyecto, reglas de vigilancia de contexto, comandos largos en primer plano.
- Ciclo 3: 1 h 15 min → regla de estudio de competidores (solo docs públicas / black-box).
- Ciclo 4: menos de 5 min → setup de GPU, nuevo rol de ML-engineer.

### La "design interview" (punto clave de handover humano)
- Desde oneimage-csharp, un **agente project manager responde las preguntas de diseño del planner** (50 preguntas en 9 min para oneimage; 33 para onepdf), con **cada decisión atribuida** a quien la tomó.

### Métricas y resultados
- Coste por run (períodos de case study): oneyaml-rust 162 runs ~$4,400; oneyaml-go/csharp 396 runs ~$2,800; oneimage-csharp 66 runs ~$460. Todos los modelos vía suscripción (gasto registrado $0).
- Modelos: Claude Opus 5.5 (planning/review/management), Claude Sonnet 5.5 (código), GPT-6 Astra (revisiones externas).
- onepdf-csharp 1.0: **40,024 líneas de C#** + 13,780 de tests, 115 commits. Más rápido que PdfPig 0.1.16 en las 17 filas; error de texto 5.6% vs 13.5%; 0 crashes en GovDocs1 (5,767 archivos), SafeDocs (5,000) y veraPDF (2,906).
- oneyaml-rust: pasa yaml-test-suite **402/402**; oneyaml-go gana 129/129 filas; oneimage-csharp más rápido que ImageSharp 3.1.12 en 27 de 29 tareas, decodificación JPEG bit-exact vs libjpeg-turbo.
- Mensajes del dueño cada vez más breves pero más decisivos: oneyaml-rust mediana 45 caracteres, 15 de una sola letra; onepdf mediana 200 caracteres, 0 de una letra, 1 sola conversación.
- Trabajo paralelo: 607 tareas de cliente durante el run de oneimage (emergencia de cliente); 15 ideas de librerías en cola.

### Fracasos y modos de fallo (relevante para la tesis)
- Los agentes **esperaban pasivamente los tests** e **inventaban reglas y luego las obedecían**: "Agents drift hard into process and rules. Way overly so…"
- "Is there unnecessary procedure that's holding us up?" — el dueño tiene que detectar y recortar el procedimiento innecesario.
- "The more you tell an agent to do, the more it does wrong when it comes to agents that are highly flexible."
- 7 mensajes "keep waiting" en el ciclo 2; ambos README de 1.0 rechazados; 5 h 25 min perdidas por un reinicio de PC; onepdf necesitó un patch 1.0.1 **46 minutos después** del 1.0.
- El recuento de mensajes se hizo por atribución por eliminación (la plataforma no registra remitentes); el tiempo de lectura no se cuenta.

### Citas literales del dueño
- Pregunta de apertura del proyecto: "Is there a good open-source yaml library for rust?"
- "It built rust first, then built the kit based on those learnings."
- "Make OnePDF public / Sign into chrome and publish nuget" (mensaje típico de una sola línea)
- "oneocr next."
- "can you do OCR without a heavy ML model behind it?"
- "OneImage was an idea yesterday. OnePDF was an idea this morning."
- "…is done and live / The next two languages I want to tackle are c# and go"

### Relación con el concepto de software factory
- Es un **caso literal de fábrica de software**: pipeline repetible (agentes + proceso fijo + arquitectura fija) que produce salidas sucesivas con **input humano decreciente**, refinada entre corridas.
- Welch afirma que el patrón (agentes/proceso/arquitectura) generaliza a otros tipos de trabajo; el otro ejemplo de volumen citado es **PHP2Shell** (82 especificaciones de formularios convertidas a web components).
- Caveats del propio informe: las librerías difieren en alcance/dificultad; el conteo de mensajes es un proxy tosco; oneocr está sin terminar (resultados no reclamados).

### Recomendaciones del informe (sección 9)
- Construir la fábrica sobre el primer run (el lento); refinar con cambios pequeños inmediatamente después de cada resultado; **medir la atención del dueño por run**.
- Dejar que un agente responda la design interview con atribución.
- Mantener fijos los controles externos (suite/corpus, benchmark contra el incumbente, fuzzing, **derrotas publicadas**) mientras mejora la velocidad.

### Enlaces
- Case studies: /research/building-oneyaml-rust/, -oneyaml-go-csharp/, -oneimage-csharp/, -onepdf-csharp/
- Repos: github.com/recursive-ai-oss · NuGet: RecursiveAI.OnePdf
