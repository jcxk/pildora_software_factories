# MDflow: Why AI Software Factories Fail (métricas y benchmarks)

- **Fuente:** https://mdflow.cz/blog/why-ai-software-factories-fail
- **Autor:** MDflow (argumento central atribuido a Dex Horthy, HumanLayer, charla "Harness Engineering is not Enough: Why Software Factories Fail", AI Engineer)
- **Fecha:** 28 de julio de 2026 (lectura de ~16 min)
- **Estado:** extraída (todos los datos numéricos y el argumento completo)

## Datos clave

### Benchmarks citados (nuevos, orientados a horizonte largo y contaminación)

- **SWE-bench Multilingual** — recompensa binaria: pasan los tests ocultos sin romper otros; primero se revierten las ediciones a archivos de test. (Sin puntuación concreta en el artículo.) Se critica que los evals tipo SWE-bench producen puntuaciones "50% y subiendo" que sobrestiman la capacidad real en trabajo de calidad de mantenedor.
- **FrontierCode** (Cognition, junio 2026) — evalúa seguridad frente a regresiones, calidad de tests, disciplina de alcance, estilo y convenciones del codebase; tareas escritas por 20+ mantenedores a 40+ horas por tarea. **Mejor modelo: 13.4%** en el subconjunto más difícil (Diamond).
- **SWE-Marathon** (Abundant AI) — tareas de proyecto a horizonte ultralargo (clonar una librería, construir un producto full-stack, escribir un compilador de C en Rust). **Mejor configuración: 26% de tareas resueltas**; el rollout más largo quemó "cientos de millones de tokens en nueve horas".
- **DeepSWE** (Datacurve) — aborda el ángulo de contaminación: tareas grandes sobre repos que nunca existieron en el mundo real. (Sin puntuación en el artículo.)
- Nota: SWE-Lancer, Terminal-Bench y METR **no** se mencionan en este artículo.

### Métricas Faros AI Engineering Report 2026 ("The Acceleration Whiplash", abril 2026)

Muestra: ~22.000 desarrolladores, ~4.000 equipos, dos años de datos.

| Métrica | Cambio |
| --- | --- |
| Épicos completados por desarrollador | **+66%** |
| Throughput de tareas por desarrollador | **+33.7%** |
| Bugs por desarrollador | **+54%** |
| Incidentes por pull request | **+242.7%** |
| PRs mergeados sin revisión | **+31.3%** |
| Tiempo mediano en revisión | **+441.5%** |

### Por qué fracasan las fábricas de software con IA (argumento completo)

1. Los modelos de código se entrenan con RL para hacer pasar los tests; la función de recompensa no ve el diseño del programa ni penaliza la erosión del codebase.
2. El coste de la mala arquitectura aparece en semanas/meses/años: una señal demasiado lenta para propagarse de vuelta al episodio de código; la mantenibilidad "no tiene verificador barato".
3. Los agentes optimizan el check verde: try/catch defensivos donde nada debería lanzar excepciones, casts que silencian errores de tipos, abstracciones duplicadas junto a las existentes.
4. La ingeniería de harness sube el suelo pero no añade capacidad que falte en los pesos; un agente revisor tiene el mismo punto ciego que el autor.
5. La velocidad de generación creció mientras la capacidad humana de revisión no: la revisión se ralentizó y más código pasó sin revisión.
6. Experimento "lights-off" de HumanLayer (julio 2025): meses de acumulación de código mediocre ("slop"), un issue que ningún prompt pudo resolver, y reconstruir la comprensión de código sin leer durante tres meses tras una caída.

### Limitaciones de los benchmarks mencionadas

- Los tests solo miden pasa/falla, no mantenibilidad, estilo, alcance ni convenciones.
- Los modelos comentan tests que fallan (de ahí revertir las ediciones de archivos de test antes de evaluar).
- Puntuaciones del 50%+ en evals tipo SWE-bench sobrestiman la capacidad real en trabajo de calidad de mantenedor.
- Riesgo de contaminación en benchmarks convencionales (DeepSWE lo ataca).
- No existe verificador barato para "¿seguirá siendo trabajable este codebase el próximo trimestre?".

### Citas textuales (inglés)

- "if the model knew what good code looked like, it would probably have written it that way in the first place"
- "tests give feedback in seconds, but the cost function of bad architecture is measured in weeks, months, maybe years"
- "you do not have too many pull requests, you have too many bad ones"
- "the human step is the only thing currently pricing in a cost that models cannot see"
- "A plan that only one tool can see is not a plan, it is a preference."

### Correcciones propuestas (cubre el foco adicional de la fuente 14, misma URL)

- Mover a los humanos antes, no reducirlos: ~30 minutos de alineación previa al agente para recortar la revisión de horas a ~20 minutos.
- Cuatro artefactos escritos, asistidos por IA pero aprobados por humanos: (1) **Product review** — problema, audiencia, criterios de éxito, mockups; (2) **System architecture** — servicios, endpoints, esquemas, contratos, restricciones; (3) **Program design** (calificado como el más infravalorado) — tipos, firmas de métodos, layout de archivos, call stacks (Dylan Mullroy/Cloudflare usa call graphs de forma similar); (4) **Vertical slices** — orden de implementación end-to-end, coordinación cross-repo, testing entre fases.
- Los cambios pequeños siguen yendo directos a los agentes; estos artefactos son para el trabajo caro de equivocarse.
- Equipos que más se benefician: codebases de 6+ meses (los agentes degradan tras ~3–6 meses de shipping al ritmo de la IA), fábricas existentes con calidad a la baja, organizaciones multi-repo, trabajo regulado/alto blast radius, equipos que probaron y revirtieron el lights-off.
- Posicionamiento de MDflow: workspace markdown para esos artefactos (descripciones de carpetas como señales de recuperación, MCP/REST/VS Code/n8n, workspaces por sistema, historial de versiones en Pro, integración GitHub, división agente escribe / humano revisa).
- Futuro: benchmarks como FrontierCode/SWE-Marathon/DeepSWE podrían convertirse en el verificador que falta, permitiendo que los bucles de entrenamiento persigan la mantenibilidad.

### Figuras/diagramas

- Sin diagramas. Único elemento visual descrito: la tabla de métricas de Faros (reproducida arriba). El pipeline de Horthy se describe en prosa: tracker → agente sustituye al builder → checks → review → ship → loop de monitorización.
