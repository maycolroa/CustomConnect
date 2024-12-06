![logopython](https://github.com/user-attachments/assets/30173a6c-2700-4567-8190-27e24c27f8ee)

## Description

Este proyecto es una aplicación web que permite 

## Proyecto de Análisis de Texto

- Descripción del Proyecto

- Estructura del Proyecto

- Configuración de Docker

- Explicación del Backend

- Explicación del Frontend

- Cómo Ejecutar el Proyecto

- Explicación del Proceso de Análisis


## Descripción del Proyecto

- 


## Estructura del Proyecto


## Configuración de Docker

Docker se utiliza para crear y ejecutar contenedores que contengan el backend y el frontend de la aplicación. Esto asegura que la aplicación se ejecute en un entorno controlado, eliminando conflictos de dependencias y permitiendo una fácil portabilidad.

Archivo docker-compose.yml
El archivo docker-compose.yml permite ejecutar el frontend y el backend simultáneamente. Define dos servicios:

Backend: Ejecuta el servidor de FastAPI en el puerto 8000.
Frontend: Ejecuta la aplicación de Vue.js servida por nginx en el puerto 8080.

archivo docker-compose.yml
```
version: '3.8'

services:
  backend:
    build:
      context: ./backend
    env_file:
      - ./backend/.env
    ports:
      - "8000:8000"
    volumes:
      - ./backend/app:/app/app
    depends_on:
      - db
    networks:
      - app-network

  frontend:
    build:
      context: ./frontend
    ports:
      - "8080:8080"
    environment:
      - VITE_API_URL=http://backend:8000
    depends_on:
      - backend
    networks:
      - app-network

  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: text_analyzer
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - app-network

volumes:
  db_data:

networks:
  app-network:
    driver: bridge

```

## Explicación del Backend

El backend está desarrollado en Python usando FastAPI, un framework web rápido y moderno que permite construir APIs de manera sencilla.

- main.py: Este archivo es el punto de entrada de la aplicación de FastAPI. Configura la API y establece los parámetros de CORS (Cross-Origin Resource Sharing) para permitir que el frontend acceda a la API.

- Controlador 

- Servicios 

- Modelos 

## Explicación del Frontend

El frontend está desarrollado con Vue.js y se encarga de la interfaz gráfica con la que interactúa el usuario.

- App.vue: El componente principal de la aplicación, que sirve como contenedor para el componente de análisis de texto.


## Cómo Ejecutar el Proyecto

```bash

$ git clone https://github.com/tu_usuario/text_analyzer.git

$ cd text_analyzer

```

```bash

$ docker-compose up --build

```

Accede a la Aplicación:

- Frontend: Abre un navegador y ve a http://localhost:8080.
- Backend: La API de FastAPI está disponible en http://localhost:8000.


## Sigueme

- Author - [maycol roa](https://www.linkedin.com/in/maycol-david-roa-trivi%C3%B1o-14b27a106/)
- Website - [portafolio](https://maycol.webflow.io/about)


