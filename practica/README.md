# Práctica — «Niveles de sueño» 🌀

Manos al teclado: vamos a levantar vosotros mismos la app de microservicios de la charla
(`demo/`), mirar debajo del capó y añadirle un servicio nuevo. **Docker Compose se aprende
haciendo**, no escuchando.

## Requisitos

- Docker Desktop instalado y arrancado (comprueba el icono 🐳 en la barra). ¿No lo tienes?
  Emparéjate con alguien que sí — en 5 minutos cambiais.
- Un terminal y un navegador.
- El repo clonado: `git clone https://github.com/jcxk/pildora_dd_microsrv.git`
  (o descárgalo como ZIP si no tienes git a mano).

## Los pasos

| Paso | Qué hacemos | Concepto de Compose que aprendemos | Tiempo |
|------|-------------|-----------------------------------|--------|
| [Paso 0](paso-0-preparacion.md) | Preparar el terreno | — | 2' |
| [Paso 1](paso-1-levantar.md) | Levantar la app | `up`: un archivo, un comando | 5' |
| [Paso 2](paso-2-bajo-el-capo.md) | Mirar debajo del capó | redes, DNS por nombre, `logs`, `exec` | 4' |
| [Paso 3](paso-3-adminer.md) | Añadir un servicio | anatomía de un servicio en YAML | 5' |
| [Paso 4](paso-4-bonus.md) | Bonus: persistencia y escalado | volúmenes, `down -v`, `--scale` | libre |

Si te atascas en cualquier paso: levanta la mano 🙋 — está permitido y es lo normal.
El **Paso 4 es deberes** si no llegamos en clase.

## La app que vais a levantar

```
   navegador
      │ :8080
      ▼
    web (nginx) ──► api (FastAPI) ──► cache (Redis)
                        │   ▲               │ si no está en caché…
                        ▼   │               ▼
                      db (MySQL) ◄──── baja a la base de datos
```

Cada botón de **«Ir más profundo ↓»** baja un nivel de sueño (1→2→3→Limbo→1…) y os dice
si la respuesta ha venido de la **caché** o de la **base de datos**. Fijaos en eso: es
microservicios en miniatura — cada pieza hace una sola cosa y hablan por la red.
