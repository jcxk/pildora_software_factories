# Paso 2 — Mirar debajo del capó (redes, DNS y logs)

**Objetivo:** comprobar con tus propios ojos que los contenedores forman una red privada
y se encuentran por **nombre de servicio**.

## Comandos

```bash
# 1. Los logs de todos los servicios, mezclados (Ctrl+C para salir):
docker compose logs -f

# 2. Los logs de uno solo:
docker compose logs api

# 3. Entra DENTRO del contenedor de la API con una shell:
docker compose exec api bash
#    y desde dentro, resuelve el nombre «db» como haría la aplicación:
python -c "import socket; print(socket.gethostbyname('db'))"
exit

# 4. La red que Compose creó para el proyecto:
docker network ls | grep sueno
```

## Resultado esperado

- En los logs ves arrancar MySQL, Redis, la API (uvicorn) y nginx — cada uno en su contenedor.
- `gethostbyname('db')` devuelve una **IP interna** tipo `172.x.x.x`. ¡No la has configurado tú!
- Existe una red `niveles-de-sueno_sueno`. Fuera de esa red, nadie ve a `db` ni a `cache`.

## Qué acaba de pasar

Compose creó una **red privada** para el proyecto y un **DNS interno**: `db`, `cache`, `api`,
`web` son nombres que solo se resuelven **dentro** de esa red. Por eso en el `compose.yml`
la API conecta con `host: db` y nginx hace `proxy_pass http://api:8000` — nombres, jamás IPs.

Si mañana reconstruyes todo, las IPs cambiarán… pero los nombres seguirán funcionando.
Así se hablan los microservicios.
