# Paso 1 — Levantar la app (un archivo, un comando)

**Objetivo:** arrancar los 4 microservicios de una sola vez y jugar con la app.

## Comandos

```bash
# desde demo/ — arranca TODO lo que define el compose.yml:
docker compose up -d --build

# mira lo que está corriendo:
docker compose ps
```

Ahora abre **http://localhost:8080** en el navegador y pulsa «Ir más profundo ↓» varias veces.

## Resultado esperado

- `docker compose ps` muestra **4 servicios**: `web`, `api`, `cache`, `db` ( STATUS `running` / `healthy` ).
- La web muestra **NIVEL 1 · La ciudad lluviosa**, y cada clic baja de nivel: 2 (hotel), 3 (fortaleza), Limbo…
- Abajo, la línea *«respuesta servida por …»* alterna entre **caché (Redis)** y **base de datos (MySQL)**:
  refresca la página dos veces seguidas y verás el TTL de 15 s en directo.

## Qué acaba de pasar

- **Un solo archivo** (`compose.yml`) describe los 4 servicios: imagen/build, puertos, variables,
  volúmenes, healthchecks. **Un solo comando** (`docker compose up`) crea la red, los contenedores
  y los arranca **en el orden correcto** (la API no arranca hasta que `db` y `cache` están *healthy*).
- El navegador solo ve el **puerto 8080** (el de `web`). Entre contenedores no hacen falta puertos:
  se hablan por la red interna de Compose.
- `web` no sabe programar: cuando el navegador pide `/api/...`, nginx se lo **proxya** al servicio
  `api`… por su **nombre**, no por una IP.

> 🧯 ¿Algo raro? `docker compose logs` te enseña lo que dice cada servicio, y
> `docker compose down && docker compose up -d --build` reinicia de cero.
