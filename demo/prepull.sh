#!/usr/bin/env bash
# Descarga las imágenes ANTES de la charla, para no depender del wifi del aula.
# Uso:  ./prepull.sh
set -e
docker pull python:3.12-slim
docker pull nginx:1.27-alpine
docker pull redis:7-alpine
docker pull mysql:8.4
echo "✓ Imágenes listas para la sesión"
