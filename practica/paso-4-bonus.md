# Paso 4 (Bonus) — Persistencia y escalado

**Objetivo:** entender qué muere y qué sobrevive cuando paras la app, y qué significa
«escalar un microservicio». Este paso es **deberes** si no llegamos en clase.

## A. ¿Qué sobrevive a un `down`?

```bash
docker compose down          # para y BORRA los contenedores
docker compose up -d         # levanta de nuevo
```

Abre http://localhost:8080: el nivel y los **descensos siguen ahí**. ¿Por qué? El servicio
`db` guarda sus datos en el **named volume** `datos:` — un trozo de disco que pertenece a
Compose, no al contenedor. Contenedores efímeros, datos persistentes.

```bash
docker compose down -v       # ← ahora sí: borra también los volúmenes
docker compose up -d         # nivel 1, descensos 0: sueño recetado
```

> ⚠️ `down -v` destruye datos. En producción, esa `-v` da miedo — y debe dártelo.

## B. Escala la API

```bash
docker compose up -d --scale api=3
docker compose ps            # hay 3 contenedores de «api»
docker compose logs api | grep "Uvicorn running"
```

Vuelve a la web y dale a «Ir más profundo» unas cuantas veces: la app sigue funcionando.
Cada contenedor de api es independiente — **no publican puertos en tu máquina** (solo `web`
lo hace), por eso pueden convivir.

¿Y quién reparte el trabajo entre las 3 réplicas? Aquí, el DNS de Docker resuelve
round-robin a lo bestia; el balanceo *de verdad* (afinidad, retries, métricas) ya es
terreno del **Nivel 3**: proxies, orquestadores… Bienvenidos a la pendiente. 🎿

## C. Para terminar

```bash
docker compose down          # deja el aula limpia
```

## Qué acaba de pasar

- **Volúmenes** = persistencia desacoplada de los contenedores (`down` la respeta, `down -v` no).
- **Escalar** = más réplicas de UN servicio sin tocar los demás — la promesa de los microservicios.
- Y sus límites = el precio de los microservicios. Todo en tres comandos.
