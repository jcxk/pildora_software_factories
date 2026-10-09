"""
API de «niveles de sueño» — un microservicio pequeño a propósito.

Patrón cache-aside: cada petición mira primero la caché (Redis);
solo si no está ahí baja a la base de datos (MySQL) y repuebla la caché.
Así en clase se VE quién responde en cada momento.
"""
import json
import os

import pymysql
import redis
from fastapi import FastAPI

# Los «host» son los NOMBRES DE SERVICIO del compose.yml (DNS de la red de Compose).
BD = dict(
    host=os.getenv("DB_HOST", "db"),
    user=os.getenv("DB_USER", "sueno"),
    password=os.getenv("DB_PASSWORD", "sueno_pass"),
    database=os.getenv("DB_NAME", "sueno"),
    cursorclass=pymysql.cursors.DictCursor,
)
CACHE = redis.Redis(host=os.getenv("REDIS_HOST", "cache"), port=6379, db=0)
CLAVE = "estado"   # clave en Redis, con TTL corto para que se note el efecto caché
TTL = 15           # segundos

app = FastAPI(title="Niveles de sueño")


def leer_de_bd() -> dict:
    """El camino lento: preguntar a MySQL cómo va el sueño."""
    with pymysql.connect(**BD) as con, con.cursor() as cur:
        cur.execute(
            "SELECT e.nivel, e.descensos, n.nombre, n.descripcion "
            "FROM estado e JOIN niveles n ON n.num = e.nivel "
            "WHERE e.id = 1"
        )
        fila = cur.fetchone()
    return {
        "nivel": fila["nivel"],
        "nombre": fila["nombre"],
        "descripcion": fila["descripcion"],
        "descensos": fila["descensos"],
    }


@app.get("/estado")
def estado():
    """¿En qué nivel está el sueño? Primero la caché; si falla, la base de datos."""
    crudo = CACHE.get(CLAVE)
    if crudo:                                   # acierto de caché: rápido
        datos = json.loads(crudo)
        datos["fuente"] = "caché (Redis)"
        return datos
    datos = leer_de_bd()                        # fallo de caché: bajamos un nivel
    CACHE.setex(CLAVE, TTL, json.dumps(datos))  # repoblamos y ponemos temporizador
    datos["fuente"] = "base de datos (MySQL)"
    return datos


@app.post("/descender")
def descender():
    """Bajar un nivel más profundo (1→2→3→4→1…) e invalidar la caché."""
    with pymysql.connect(**BD) as con, con.cursor() as cur:
        cur.execute(
            "UPDATE estado SET nivel = 1 + MOD(nivel, 4), descensos = descensos + 1 "
            "WHERE id = 1"
        )
        con.commit()
    CACHE.delete(CLAVE)                         # la caché ya está desactualizada
    return estado()


@app.get("/salud")
def salud():
    """Healthcheck: ¿responden MySQL y Redis? Compose lo pregunta cada pocos segundos."""
    try:
        with pymysql.connect(**BD) as con, con.cursor() as cur:
            cur.execute("SELECT 1")
        CACHE.ping()
    except Exception:
        return {"status": "ko"}
    return {"status": "ok"}
