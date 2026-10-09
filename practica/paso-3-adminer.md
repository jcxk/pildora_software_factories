# Paso 3 — Añade tu propio servicio (Adminer)

**Objetivo:** que añadas un microservicio nuevo a la app tú mismo: **Adminer**, una
interfaz web para administrar MySQL.

## Comandos

Abre `demo/compose.yml` y añade este bloque al final de la lista de `services:`
(al mismo nivel de indentación que `web:`, `api:`, `cache:`, `db:`):

```yaml
  adminer:
    image: adminer              # imagen oficial, sin Dockerfile
    ports:
      - "8081:8080"             # Adminer en http://localhost:8081
    depends_on:
      db:
        condition: service_healthy
    networks: [sueno]
```

Después:

```bash
docker compose up -d        # solo crea/arranca lo nuevo: el resto sigue igual
docker compose ps           # ahora hay 5 servicios
```

Abre **http://localhost:8081** y conéctate:

| Campo         | Valor        |
|---------------|--------------|
| Sistema       | MySQL        |
| Servidor      | `db`         | ← ¡el nombre del servicio!
| Usuario       | `sueno`      |
| Contraseña    | `sueno_pass` |
| Base de datos | `sueno`      |

Dentro, mira la tabla `niveles` y la tabla `estado`.

## Resultado esperado

Adminer conecta a `db` **sin que le hayas dicho ninguna IP**, y ves los datos de la app.
En `estado` está el nivel actual y el número de descensos que habéis hecho en clase. 😄

## Qué acaba de pasar

Acabas de **escalar la arquitectura** con 7 líneas de YAML: un servicio nuevo, con su puerto,
su dependencia y su red. `up -d` es inteligente: solo crea lo que falta, no reinicia lo que
ya funcionaba. 

Fíjate también en el detalle del **server: `db`** en el formulario de Adminer: Adminer corre
en su propio contenedor, dentro de la red `sueno`, así que para él `db` es un nombre perfectamente
resoluble. Eso es el DNS de Compose otra vez.
