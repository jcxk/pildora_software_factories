# Differ: What is a dark software factory?

- **Fuente:** https://blog.getdiffer.com/what-is-a-dark-software-factory
- **Autor:** Differ (Sky Valley Ambient Computing), sin autor nominal
- **Fecha:** 20 de julio de 2026
- **Estado:** extraída

## Datos clave

- **Definición**: pipeline de entrega de software ejecutado de punta a punta por agentes autónomos — escriben, testean, despliegan y se auto-reparan — sin un humano operando cada paso.
- **Origen del término**: prestado de la manufactura — «dark factory» / planta «lights-out» que no necesita luces porque no hay humanos en el suelo. Ejemplo canónico: **FANUC** (Japón), plantas con «almost no on-site staff».
- **3 capacidades definitorias**: ① construcción autónoma (código mergeable), ② auto-verificación (el sistema juzga su salida antes que los usuarios), ③ auto-reparación (arregla en vez de abrir tickets).
- **Cifra**: humanos fuera de «~el 80% que es build-test-ship-repair».
- **Riesgos**: el cuello de botella es la **verificación** — los agentes escriben código pero les cuesta juzgarlo sin tráfico real (problema de arranque en frío); el análisis estático no caza lo «technically correct and practically broken». Confusiones habituales: con CI/CD (automatiza fontanería, no juicio) y con el autocomplete (humano en el bucle por token).
- **Rol humano**: «on the loop» — objetivos, guardrails, revisión de cambios de alto riesgo; lights-out solo para el trabajo rutinario.

## Citas

- «Autonomous construction without verification just produces broken code faster.»
- «CI/CD is the conveyor belt. The dark factory is the conveyor belt plus the workers.»
- «the human is on the loop — supervising, setting guardrails, spot-checking — but not inside every action.»
