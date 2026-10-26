# Entrevista Pragmatic Engineer: Context engineering with Dex Horthy

- **Fuente:** https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy
- **Autor:** Gergely Orosz (entrevistador); entrevistado: Dex Horthy — CEO y cofundador de HumanLayer, a quien se atribuye acuñar "context engineering", autor de "12-Factor Agents"
- **Fecha:** 15 de julio de 2026
- **Estado:** extraída

## Datos clave

### Formato y estructura

- Episodio de podcast (~1h32m) con transcripción escrita, lista de takeaways, referencias y enlaces (YouTube/Spotify/Apple)
- Secciones con timestamps: Intro; Dex's path into tech; Early work in platform engineering; Replicated; Metalytics; 12-factor agents; Context engineering; Harness engineering; Context overload; Loop engineering; Software factories before and after AI; Automation limits; Three options for automating; RPI framework; Intentional compaction; Token harder vs. token smarter; AI slop; HumanLayer; Book recommendation

### Workflow descrito (intentional compaction)

1. Una sesión lee mucho código estando en la "smart zone" y produce un documento de investigación (research document)
2. La siguiente sesión convierte tickets de trabajo en un documento de diseño (design document)
3. Una sesión posterior combina ambos documentos para crear un plan
4. Review humano en puntos clave: el documento de diseño y la arquitectura, donde Dex encuentra que los modelos son débiles

### Citas clave (verbatim, inglés)

- Tobi Lutke sobre context engineering: "the art of providing all the context for the task to be plausibly solvable by the LLM."
- Karpathy: context engineering es "the delicate art and science of filling the context window"
- Dex (post en X): "slop in → slop out" y "if you outsource the thinking, you're gonna get garbage"
- Sobre el experimento sin review (parafraseado del resumen): "Shipping unread code spells disaster within months."
- Frases que delatan una sesión envenenada (trajectory-poisoned): "You're completely right!" o "you're right to push back on that"

### Números y métricas

- ~100 "real" AI Engineers entrevistados para 12-Factor Agents; contratos enterprise de $100K+ mencionados
- Julio de 2025: experimento sin review de código; se cerró tras ~4 meses; 3 semanas para re-familiarizarse con la base de código no leída
- "Dumb zone": ~300–400K tokens en modelos de contexto 1M; ~100K para modelos más pequeños
- GPT-OSS-120B ≈ 1/1.000 del coste de Opus
- Loops lentos: empezó con 1 PR nocturno; ahora 4 agentes abren 4 PRs por la mañana
- Enfoque de revisar todo el código: +30–50% de productividad; enfoque de leverage: 2–3x más rápido
- Eval propuesto: un modelo construyendo 20 features seguidas sin saber qué viene después
- Tweet de Dex: ventana de contexto de 1M es "unhinged" dado que los modelos sufren pasado 100k; otro tweet: periodo de "1-3 year" de riesgo existencial

### Takeaways principales

1. No shippes código de IA sin revisar — el experimento "no review" de HumanLayer falló en meses
2. Los modelos entrenados con benchmarks tipo SWE-bench pueden degradar las bases de código (la mala arquitectura no la mide un test unitario)
3. Menos contexto = mejores resultados; encontrar la "dumb zone" y usar intentional compaction
4. Cuatro factores del contexto: tamaño, calidad de la información, información que falta, trayectoria (trajectory)
5. Empezar con el modelo más inteligente; optimizar costes solo a escala
6. Preferir "token smarter" sobre "token harder"
7. Mejor camino: mantener humanos en el loop en puntos de alto apalancamiento (diseño, arquitectura, decisiones clave) — aceleración de 2–3x sin la carga del review completo
