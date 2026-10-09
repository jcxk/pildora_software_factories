FROM python:3.12-slim
WORKDIR /app

# primero las dependencias: así Docker aprovecha la caché de capas
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# no corramos como root, ni en clase ni en producción
RUN useradd -m app && chown -R app /app
USER app

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
