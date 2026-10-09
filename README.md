# Tenemos que ir más profundo 🌀

Píldora de **45 minutos** sobre **Docker Compose y microservicios** para Factoría F5,
montada sobre la analogía de *Inception* (Origen, 2010): cada nivel de sueño es una capa
más de arquitectura, y en el Limbo se pierde hasta el más pintado.

```
NIVEL 1 · La ciudad lluviosa   →  lo que ya sabéis de Docker (recap)
NIVEL 2 · El hotel             →  microservicios + Docker Compose   ◀ aquí se vive
NIVEL 3 · La fortaleza nevada  →  crecer: salud, escalado, entornos
LIMBO                          →  complejidad por moda: no bajes
PRÁCTICA                       →  20' manos al teclado (los alumnos bajan solos)
```

## Qué hay en este repo

| Carpeta | Contenido |
|---------|-----------|
| [`docs/`](docs/) | La baraja: `index.html` (reveal.js, se abre en el navegador) y el [PDF descargable](docs/pildora-docker-compose-microservicios.pdf). Será la web del repo cuando se publique. |
| [`demo/`](demo/) | La app de la charla: **«niveles de sueño»**, 4 microservicios (web + api + cache + db) orquestados con Compose. |
| [`practica/`](practica/) | La práctica en clase, paso a paso (P0–P4), una tarjeta por paso. |
| `tools/` | Scripts para regenerar capturas y el PDF de la baraja. |

## Arrancar el demo (2 comandos)

```bash
cd demo
docker compose up -d --build
```

Abre **http://localhost:8080** y pulsa «Ir más profundo ↓». Cada clic baja de nivel
(1→2→3→Limbo→1…) y la página te dice **quién respondió**: la caché (Redis) o la base de
datos (MySQL). Con `docker compose down` paras (los datos sobreviven; con `down -v`, no).

Antes de la charla en el aula: `./demo/prepull.sh` para bajar las imágenes y no depender
del wifi.

## La práctica

En [`practica/`](practica/README.md): levantar la app, mirar la red y el DNS por debajo
del capó, **añadir un servicio nuevo** (Adminer) al `compose.yml` y, de deberes,
persistencia y escalado. Diseñada para ~20' en clase, en parejas.

## Regenerar los materiales

```bash
cd tools
npm install                      # primera vez: playwright
npx playwright install chromium
node capturas.mjs                # captura las 21 diapositivas + extrae notas
./export_pdf.sh                  # rebuild del PDF de la baraja
```

Las notas de orador (con timings y marcas «cortable») viven en el HTML de cada
diapositiva (`<aside class="notes">`) y en `tools/out/slides/notes.json` al exportar.

## Estado

- ✅ Demo probado de punta a punta (charset, healthchecks, DNS, caché, escalado de nivel)
- ✅ Baraja pasada por control visual diapositiva a diapositiva
- ⏳ **Pendiente de publicar** (GitHub + Pages) — a decisión del autor; `docs/` ya está
  preparado como raíz del sitio con `.nojekyll`.
