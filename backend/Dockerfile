# Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt ./

# Actualiza pip y luego instala las dependencias
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]


