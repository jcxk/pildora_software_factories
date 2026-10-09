# Paso 0 — Preparar el terreno

**Objetivo:** que todos tengáis Docker funcionando y el repo en vuestro portátil.

## Comandos

```bash
# 1. ¿Está Docker arrancado? Debe imprimir una versión, no dar error:
docker --version
docker compose version

# 2. Clona el repo (o descomprímelo si lo descargaste en ZIP):
git clone https://github.com/jcxk/pildora_dd_microsrv.git
cd pildora_dd_microsrv/demo
```

> 💡 Si `docker --version` da error o se queda colgado: abre **Docker Desktop** y espera
> a que el icono 🐳 deje de animarse. ¿Nada? Emparéjate con tu vecino/a y seguid juntos.

## Resultado esperado

Algo parecido a esto:

```
Docker version 29.x.x, build xxxxxxx
Docker Compose version v2.x.x
```

…y tu terminal dentro de la carpeta `demo/`, que es donde vive el `compose.yml`.

## Qué acaba de pasar

Nada todavía — pero fíate de una cosa: **no hemos instalado ni Python, ni MySQL, ni Redis,
ni nginx**. Todo lo que vamos a usar viene empaquetado. Esa es la magia que vamos a explotar.
