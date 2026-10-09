-- Seed de la base de datos: se ejecuta SOLO la primera vez que arranca MySQL
-- (cuando el volumen «datos» está vacío).
SET NAMES utf8mb4;   -- sin esto, el cliente del entrypoint puede leer el UTF-8 como latin1
USE sueno;

CREATE TABLE niveles (
  num          TINYINT PRIMARY KEY,
  nombre       VARCHAR(50)  NOT NULL,
  descripcion  VARCHAR(200) NOT NULL
);

INSERT INTO niveles (num, nombre, descripcion) VALUES
  (1, 'La ciudad lluviosa', 'Nivel 1: donde todo empieza — un contenedor, una app.'),
  (2, 'El hotel',           'Nivel 2: varias piezas coordinadas — microservicios.'),
  (3, 'La fortaleza nevada','Nivel 3: fortificado — salud, escalado, producción.'),
  (4, 'Limbo',              'Demasiado profundo. No bajes sin experiencia.');

-- El «estado del sueño»: en qué nivel estamos y cuántos descensos llevamos
CREATE TABLE estado (
  id         TINYINT PRIMARY KEY,       -- siempre 1: una sola fila
  nivel      TINYINT NOT NULL,
  descensos  INT    NOT NULL DEFAULT 0
);

INSERT INTO estado (id, nivel, descensos) VALUES (1, 1, 0);
