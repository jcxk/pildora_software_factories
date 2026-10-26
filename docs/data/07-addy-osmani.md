# Software Factories, Light and Dark (Addy Osmani)

- **Fuente:** https://addyosmani.com/blog/software-factories/
- **Autor:** Addy Osmani
- **Fecha:** 2026-07-20
- **Estado:** extraída (texto completo obtenido vía curl + parseo HTML)

## Datos clave

### El framing light/dark factory
- Define la software factory como "harnessing loops at scale": el sistema que construye tu software en tu lugar.
- **Light factory:** el bucle se ejecuta con humanos dentro; se intercambia juicio y concentración contra velocidad y roturas.
- **Dark factory:** se ignora a los humanos; los agentes scopean, construyen y despliegan código sin que nadie lea los detalles. "But if people stop reading, they'll stop understanding your software."
- El "dark" viene de la manufactura (fábricas lights-out): FANUC en Japón las dirige desde 2001; Xiaomi abrió una dark factory muy automatizada en 2024. En software, "the floor is the diff": un diff verificado solo por las máquinas que lo construyeron.
- "Dark and lit are the same pipeline with the lights in different places."

### Tesis: "verification is the constraint"
- "The fundamental constraint in a software factory isn't how much code we can churn out: it's how quickly we can verify it."
- **Back pressure:** "you can only hand a loop as much autonomy as you can cheaply and reliably verify, and not one inch more."
- "Generation is a wide mouth; verification is the narrow neck. Speeding up the mouth just deepens the pile at the neck."
- El único "expensive box" del diagrama de la factory es el review gate: "That shiny amber box is 'judgment'".
- El problema de segundo orden: los cost functions de la excelencia arquitectónica se miden "in months and years", no en segundos; no hay gradientes limpios que entrenar.
- **Comprehension debt:** la brecha creciente entre cuánto código existe y cuánto entiende cualquier humano. La dark factory "takes it on as fast as it can, with the tests green the whole way".
- Caso Dex Horthy: ~4 meses de factory totalmente automatizada sin que ningún humano mirara el código terminó requiriendo debugging manual minucioso. "The ultimate reckoning... will be quiet and late."

### Fiabilidad de los agentes (números)
- Regla práctica de Dex Horthy: **un agente aguanta 3–10 pasos; a partir de 20 pasos empieza a perder el hilo** (context accumulation: cuanto más arrastra, más se desvía).
- Bucles cortos son baratos de verificar; bucles largos "hide mistakes in the corners".
- Trade-off de métricas: maximizar token utilization (la métrica que tratamos como progreso) minimiza silenciosamente la parte del sistema que algún humano entiende.

### Recomendaciones
- "Turning the lights back on": misma pipeline, pero con luces donde vive el juicio; el humano lee lo que sale antes de shippear.
- Mover el juicio humano **upstream** (producto, diseño, arquitectura) antes de que el agente empiece el bucle: "review a decision before it's built" — una hora upfront produce menos horas de implementación (revisar un plan de 200 líneas vs. 2.000 líneas de código generado).
- La red de seguridad es arquitectura ordinaria: buenos tipos y firmas, test seams, call stacks cortos y legibles, boundaries bien definidos, dependency injection. "None of it is new" — ahora hace "a second job as a cheap and hard-to-fake safety net".
- La red de seguridad debe vivir **fuera del modelo** (Claude Code y Codex están reinforcement-trained contra su propio harness, no contra la mantenibilidad a largo plazo).
- Lo que "gana" el modo dark: checks baratos, de alta frecuencia y difíciles de falsificar (oráculos green-or-red, type gates, property tests, review agent con rúbrica real; el oráculo debe responder al instante y no derivar).
- Ejemplo de loop dark legítimo: cron nocturno en GitHub Actions que arregla exactamente un anti-pattern y abre un PR pequeño (Horthy).
- Peligro: poner todos los switches en el mismo modo. All dark → "tearing everything down four months later"; all lit → cuello de botella de reviews.
- Loops → graphs/state machines: "owning your control flow is really just walking the graph back around the loop"; el agente "is still clever inside each box; it just can't wander off the paths you sanctioned".
- El humano nunca salió de la factory: "Notice that the person never left the factory. They moved." Los ingenieros deben poseer el **outer loop** (decidir si es el enfoque correcto, verificar, aprobar, cargar las consecuencias); la frontera entre loops es la evidencia: diffs, tests, logs y una explicación breve.
- Cita histórica: el término "software factory" se remonta al paper de Bob Bemer "The economics of program production" (1968).
- Referencia central: charla de Dex Horthy (HumanLayer) en AI Engineer World's Fair: "Harness Engineering is not Enough: Why Software Factories Fail".
- Nota final: "Pangram scored this article as 100% human written."
