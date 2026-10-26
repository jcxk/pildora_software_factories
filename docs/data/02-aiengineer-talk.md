# Charla ai.engineer: Harness Engineering is Not Enough / Why Software Factories Fail

- **Fuente:** https://ai.engineer/talks/Ib5GBkD555M-harness-engineering-is-not-enough-why-software-factories-fail
- **Autor:** Dex Horthy (HumanLayer)
- **Fecha:** AI Engineer World's Fair 2026
- **Estado:** extraída

## Datos clave

- Ponente: Dex Horthy; evento: AI Engineer World's Fair 2026; duración 19:18; video: https://www.youtube.com/watch?v=Ib5GBkD555M
- Título alternativo (de la transcripción): "Harness Engineering is Not Enough and Why Software Factories Fail"

### Abstract (verbatim)

> "Coding agents can shorten implementation while leaving maintainability unmeasured. Safer acceleration starts with understanding the training signal, then moving human judgment earlier in the development process."

### Prerrequisitos (verbatim)

> "Familiarity with pull requests, automated tests, and coding agents will help; the reinforcement-learning workflow is explained as it appears."

### Estructura de la charla (secciones con timestamps)

1. When faster coding meets production (0:47)
2. The factory already had loops (3:37)
3. Automation moves the bottleneck (6:01)
4. The cost of returning to unread code (7:25)
5. Why training in the harness matters (10:13)
6. What passing tests teaches (11:21)
7. Architecture sends its bill later (13:11)
8. Turn review back on, then move decisions earlier (14:48)
9. Design the program before slicing the implementation (15:59)
10. Review overload is also a rework problem (17:01)
11. Build within the constraints (17:54)
12. Resources

### Narrativa dominante que la charla cuestiona

- La "lights-off software factory" de StrongDM
- El concepto "Dark Factory" de Dan Shapiro
- El consejo de gastar más tokens: "If you haven't spent at least $1,000 on tokens today per human engineer, your software factory has room for improvement"

### Señales de alerta citadas

- Mario Zechner: "Act III: SLOW THE FUCK DOWN" (AI Engineer Europe, 10 de abril de 2026)
- Caídas de Amazon: reporte de FT sobre la herramienta Kiro; "90-day reset after code mishaps" de Business Insider
- Matt Pocock advierte que las bases de código se degradan más rápido que nunca: "Codebases are falling apart faster than they ever have before"

### Datos de Faros AI "Acceleration Whiplash" (22.000 desarrolladores, 4.000 equipos)

- +25% comentarios de review por PR
- +31.3% PRs que se saltan el review
- +242.7% incidentes por PR
- +57.9% incidentes mensuales
- +54% bugs por desarrollador

### Tesis central (verbatim)

> "no amount of harness engineering or loops maxing can solve what is fundamentally a model training issue."

- Las recompensas de RL (p. ej. SWE-bench Multilingual, tareas binarias de ~15 min) enseñan a pasar tests, no a mantener la calidad/mantenibilidad
- Los costes de arquitectura llegan meses después, rompiendo la asignación de crédito (credit assignment)

### Ejemplo Claude Code

- Atribuye su éxito a que un lab entrenó un modelo contra el harness distribuido: ~$4B de coste de entrenamiento (tentativo), ~$9B de ingresos en menos de un año

### Evaluaciones más recientes citadas

- SWE-Marathon (Abundant AI, tareas de ~400 horas)
- DeepSWE (Datacurve, tareas originales)
- FrontierCode (Cognition, multi-PR con comprobaciones de fallo de tests pre-patch y modelos juez)

### Prescripción de la charla

- Restaurar el code review humano
- Mover adelante las decisiones: product review, arquitectura, diseño del programa (tipos, call graphs — ejemplo de Dylan Mulroy), vertical slices
- Aproximadamente: "30 minutes over here in pre-planning and alignment can save you hours in review"

### Matiz: no es anti-vibe-coding

- Proyectos personales vs. sistemas empresariales de 10 años enfrentan restricciones distintas
- El foco de HumanLayer son codebases "brownfield" complejas; según se reporta, los agentes sufren tras ~3–6 meses de trabajo sobre ellas

### Citas breves (de la página)

- "You should be designing loops that prompt your agents." (Peter Steinberger)
- "The models are good enough. Code is free. Your role is to unblock your team."

### Recursos y enlaces relacionados

- Blog post de StrongDM sobre su software factory
- Informe Faros AI "Acceleration Whiplash" + takeaways (faros.ai)
- SWE-bench Multilingual, SWE-Marathon (arXiv), DeepSWE, FrontierCode (Cognition)
- HumanLayer (demo; "free for small teams"; buscando design partners y founding engineers en San Francisco)
- Blog de HumanLayer: "Skill Issue: Harness Engineering for Coding Agents"
- Discusión: comentarios de YouTube

### Temas

- Coding agents, Infrastructure & deployment, Agent engineering, Harness engineering, Software factories
