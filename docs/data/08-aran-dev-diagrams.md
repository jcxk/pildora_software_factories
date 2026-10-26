# Software Factories — diagramas de dos bucles (aran.dev)

- **Fuente:** https://aran.dev/posts/software-factories/
- **Autor:** Aran Wilkinson
- **Fecha:** 2026-09-17 (actualizada 2026-09-18)
- **Estado:** extraída (texto completo vía WebFetch; diagramas descargados del HTML)

## Diagramas descargados

Ubicación: `docs/assets/img/` (formato original conservado; las variantes theme-aware tienen versión dark equivalente en la web, se descargó la versión light).

| Archivo | Qué muestra |
|---|---|
| `aran-dex-software-factory-2022.jpg` | Diagrama "A Software Factory Circa 2022" de Dex Horthy: decisiones de producto, implementación, pull requests, testing, despliegue, monitorización, usuarios, incidentes y bucles de feedback. |
| `aran-dex-agentic-software-factory.jpg` | Diagrama de Dex Horthy de la factory agéntica: un agente sustituye el paso de implementación humana, mientras review, testing, despliegue y feedback de producción siguen en el bucle. |
| `aran-pragmatic-agentic-software-factory.png` | La factory agéntica reportada por The Pragmatic Engineer (sistema interno de OpenAI): context gathering, build y test automatizados, specialist review, despliegue basado en riesgo, monitorización de producción, feedback de rendimiento y respuesta a incidentes. |
| `aran-software-factory-feedback-loop.png` | Boceto del autor: dos bucles conectados de la software factory (bucle de delivery y bucle de producto con feedback de usuarios y producción). |
| `aran-agentic-software-factory.png` | Boceto del autor: factory agéntica donde un humano define el outcome, un agente construye y testea el cambio, el riesgo determina la ruta de review, y el feedback de producción vuelve al backlog. |

Para el autor, el detalle más importante del diagrama es "the feedback path from production back to the coding agent".

## Datos clave

### Tesis central
- Una software factory no va principalmente de agentes: es el sistema existente de task trackers, repos, PRs, CI, despliegue, monitorización y respuesta a incidentes que convierte problemas en cambios en producción.
- Los agentes solo cambian una parte del sistema; no crean las colas, los hand-offs ni los bucles de feedback.
- "The factory is the whole system: people and components connected by flows of work and information"
- La entrega son **dos bucles conectados**: el delivery loop ("Can we change the software safely?") y el product loop ("Is this the change we should make?").
- La factory produce artefactos desplegables **e información**: un build verde no significa que los usuarios estén contentos. "A team can get very good at shipping the wrong thing."
- Pregunta correcta: "not 'which agent should I use?', but 'which loop am I trying to improve?'"

### Hand-offs (los cuellos de botella reales)
- "The slowest part of the system is often not the compiler or the test suite. It is a hand-off"
- Ejemplos listados: ingeniero espera a quien entiende la decisión de producto; PR espera a un reviewer ocupado; despliegue espera un check manual; incidente espera info repartida entre sistemas; reporte de usuario espera convertirse en problema reproducible.

### Juicio humano y automatización
- "Automation changes the boundary of the work; it does not remove judgement from the system."
- Un agente que escribe código pero no puede observar sus consecuencias es solo "a faster way to create a queue of changes".
- Bucles más rápidos solo ayudan conectados a feedback útil; los agentes no compensan una factory que mide lo incorrecto.
- Parte del feedback (p. ej. mal diseño) solo emerge en meses, no en minutos.

### Notación de diagramas (por qué el diagrama es clave)
- "A box describes an activity. An arrow describes how work and information move between activities."

### Planes del autor
- Empezar con su proyecto Headcode (dividido en workspace polyrepo); uso de agentes manual/disparado a mano al principio; explorar cuatro trabajos: prototyping, building, maintaining e investigating failures.

### Métricas
- Sin cifras cuantitativas: el post es cualitativo/arquitectónico.
