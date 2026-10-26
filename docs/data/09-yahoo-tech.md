# Why software factories are back (Yahoo Tech)

- **Fuente:** https://tech.yahoo.com/ai/articles/why-software-factories-back-age-212333194.html
- **Autor:** Joe McKendrick (ZDNET, sindicado en Yahoo Tech)
- **Fecha:** 2026-08-11 (21:23 UTC)
- **Estado:** extraída

## Datos clave

### Claims principales
- Las software factories toman prototipos generados por IA y los producen en masa de forma repetible y automatizada para distribución amplia.
- El concepto se desvaneció tras ~2008 (cuando Microsoft hablaba de software factories para .NET) y ha resucitado gracias a la IA agéntica de código.
- Empresas punteras — **Anthropic, Cognition, Cursor, Factory, Google, GitHub, OpenAI y Ramp** — han convergido **independientemente en la misma arquitectura de software factory en los últimos 18 meses**.
- Los releases diarios hacen imposible la validación humana del código a escala: exige automatización.
- "Verification, not code generation, is now the main engineering bottleneck." (West: "It's incredibly cheap. Verification has become the blocker for a lot of these companies.")

### Contexto histórico
- El buzz previo ("about two decades back") acompañó la componentización del desarrollo.
- Microsoft discutió "software factory (.NET)" en **2008** (enlazado a Wikipedia).
- **Nota:** el artículo NO menciona la software factory de Hitachi de 1969.

### Números
- **74%**: proporción de veces que los agentes de IA fallaron al parchear correctamente fallos de software (estudio de 1Password, referenciado en sidebar).
- "Past 18 months" de convergencia en la arquitectura factory.
- Hipótesis: "100 times more changes" cada pocos minutos rompería la validación basada en humanos.
- **6 componentes** en una software factory típica.
- Disclosure: demanda de Ziff Davis contra OpenAI (abril 2025).

### Los seis componentes (outline de West)
1. **Queue** — el trabajo llega como issues, no como prompts.
2. **Control plane** — una superficie duradera, no un laptop.
3. **Sandbox** — uno por tarea, destruido al terminar.
4. **Pull request** — la unidad de salida, recogida por un humano.
5. **Event stream** — observar acciones, matar sin destruir la run.
6. **Durable memory** — solo lo escrito a un fichero sobrevive.

### Citas textuales (inglés)
- Plassnig (CEO de CloudBees): "coding created the bottlenecks for a lot of organizations"
- Plassnig: "Developer craftsmanship is not going away, as devs and engineers shift from writing code to exercising judgment"
- West: "Every single one of these companies has converged on the same shape"
- Plassnig: "We will get to the point where as humans [we] can't validate what's working and what's not really working anymore"
