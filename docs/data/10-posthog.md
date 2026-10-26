# Can software factories actually work? (PostHog newsletter)

- **Fuente:** https://posthog.com/newsletter/software-factories
- **Autor:** Jina Yoon
- **Fecha:** 2026-08-11
- **Estado:** extraída

## Datos clave

### La postura de PostHog
- Las software factories fallan hoy porque separan "deciding what to build" de "building it": los agentes reciben specs con cero contexto previo.
- La buena ingeniería exige entender el problema (feedback de usuarios, señales de producción), no solo seguir specs.
- Su solución: dar a los agentes el mismo contexto que usan los humanos. Hecho esto, "turning off the lights might not be so crazy after all".

### Pipeline / etapas que describen
1. Humanos **deciden** (sistema de ticketing)
2. Agentes **construyen y testean** PRs, los envían a CI/review
3. **Deploy** vía CD si se aprueba
4. **Iterate** — vuelve a los agentes si se rechaza
5. **Users** interactúan, generando datos/feedback que alimentan los siguientes builds

- Tooling implicado: version control, CI/CD, monitoring, logs, traces.
- Requisitos para una factory "lights-off": alta adopción de IA, output del agente validado "to the point of mergeability", guardrails que asumen fallo (sandboxes, permisos, checks deterministas).

### Métricas
- **~70% de los PRs** de PostHog los escriben agentes; humanos skimméan al menos el **80%** de ellos.
- **63%** de las líneas cambiadas están en ficheros existentes; "fix" es el mayor tipo de commit (**40%**).
- Newsletter leída por **75,000+** founders y builders.
- Dex Horthy escribió una serie de tres partes.
- SlopCodeBench: benchmark de calidad/mantenibilidad de código (el entrenamiento RL premia corrección one-off, no mantenibilidad).

### Citas textuales (inglés)
- "Agents write code faster than any human can review."
- Dex Horthy: "How the model got to a correct answer doesn't matter. If the tests pass, we win"
- SlopCodeBench (paper): "Every design decision in software engineering is a compromise with unknown future requirements."
- Propuesta de fix de Dex: que el output "passes all verifiers for an incrementally-divulged spec"
- Argumento de Dex (parafraseado): "no amount of harness engineering can ever make them work at scale"
