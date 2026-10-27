# i-SCOOP: Dark software factories

- **Fuente:** https://www.i-scoop.eu/dark-software-factories-and-the-future-of-autonomous-software-delivery/
- **Autor:** Tom Cuylaerts
- **Fecha:** 2 de abril de 2026
- **Estado:** extraída

## Datos clave

- **Definición dark factory**: entorno de entrega autónomo donde los agentes «handle most of the implementation work» — descomponen tareas, generan código, ejecutan tests y preparan releases con codificación humana mínima. En software «the lights are not literally off».
- **Sin métricas cuantitativas**: el artículo es cualitativo (ahorro de tiempo en migraciones grandes, ganancias en modernización de legado, sin cifras).
- **Rol humano** — «upstream and outward»: definir intención de negocio, restricciones, umbrales de calidad, aprobar stage gates; no revisar línea a línea. Roles nuevos: intent designers, harness engineers, platform engineers.
- **Riesgos de fallo**: validación de entrada ausente, inyección, auth roto, secretos hard-coded, dependencias alucinadas, architectural drift. Aviso clave: los agentes «will fill gaps with assumptions» si la spec es débil; «autonomy amplifies whatever already exists»; «the generator should not be the judge».
- **Verificación y gobernanza**: scenario-based testing fuera del codebase (holdout sets), digital twins de APIs externas, policy as code, RBAC, audit logs, golden paths, rollouts escalonados.
- **Por qué ahora**: mejores modelos (instrucciones de largo horizonte) + coste de inferencia cayendo + harness maduro (orquestación, memoria, evaluación).

## Citas

- «The shift is that software creation becomes a managed production system.»
- «A team does not become autonomous because it buys a coding tool.»
- «Code becomes one output of that system, not the main place where engineering value lives.»
