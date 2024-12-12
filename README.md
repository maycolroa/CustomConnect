![logopython](https://github.com/user-attachments/assets/30173a6c-2700-4567-8190-27e24c27f8ee)

## Description

El proyecto busca desarrollar una página web intuitiva para que pequeños productores puedan vender sus productos con mayor visibilidad. La plataforma se enfocará en brindar una excelente experiencia de usuario mediante una interfaz fácil de usar, con funciones como búsqueda de productos, categorización y gestión del carrito de compras. El éxito se medirá a través de indicadores de satisfacción del cliente, aumento en ventas y ticket promedio. La metodología incluirá definición de objetivos, planeación, desarrollo, integración y pruebas finales para verificar resultados.

## Tecnologías Utilizadas

### Frontend
- Vue.js 3
- TypeScript
- Tailwind CSS
- Vite
- Node.js

### Backend
- Python 3.8+
- FastAPI
- SQLAlchemy
- Pydantic
- JWT para autenticación

### Base de Datos
- MySQL 8.0

### Infraestructura
- Docker
- Docker Compose
- Nginx

## Proyecto CustomConnect: Sitio web de innovación digital para productos personalizados del comercio local.

- Estructura del Proyecto

- Configuración de Docker

- Explicación del Backend

- Explicación del Frontend

- Cómo Ejecutar el Proyecto

- Explicación del Proceso de Análisis


## Descripción del Proyecto

- Este proyecto consiste en una plataforma de comercio electrónico diseñada específicamente para pequeños productores, permitiéndoles mostrar y vender sus productos en línea. La plataforma está construida con una arquitectura moderna y escalable, utilizando tecnologías de última generación para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.


## Estructura del Proyecto

### Estructura General
```
CUSTOMCONNECT/
├── .vscode/
├── backend/
├── frontend/
├── docker-compose.yml
└── README.md
```

### Backend (Python)
```
backend/
├── app/
│   ├── _pycache_/
│   ├── controllers/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── utils/
├── database.py
├── main.py
├── .env
├── Dockerfile
└── requirements.txt

```

### Frontend (Vue.js)
```
frontend/
├── .vscode/
├── node_modules/
├── public/
├── src/
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── docker-compose.yml
├── env.d.ts
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── Dockerfile

```

## Configuración de Docker

Implementación de Docker en el Proyecto

### ¿Por qué Docker?

Docker se implementa en este proyecto para proporcionar un entorno de desarrollo y despliegue consistente y reproducible. Las principales ventajas de usar Docker en este contexto son:

Consistencia del Entorno

Elimina el clásico problema "funciona en mi máquina"
Garantiza que todos los desarrolladores trabajen con las mismas versiones de dependencias
Facilita la reproducción exacta del entorno de producción en desarrollo


Aislamiento de Servicios

Cada componente (frontend, backend, base de datos) se ejecuta en su propio contenedor
Previene conflictos entre dependencias
Permite gestionar recursos de manera independiente


Facilidad de Despliegue

Simplifica el proceso de despliegue en diferentes entornos
Reduce el tiempo de configuración para nuevos desarrolladores
Permite escalar servicios de manera independiente

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

## Backend (Python/FastAPI)

El backend está desarrollado en Python usando FastAPI, un framework web rápido y moderno que permite construir APIs de manera sencilla.

### Componentes Principales

- Controllers: Manejan las peticiones HTTP y la lógica de negocio
- Models: Definen la estructura de datos y las relaciones
- Schemas: Manejan la validación y serialización de datos
- Services: Contienen la lógica de negocio principal
- Utils: Funciones auxiliares y utilidades comunes 

## Frontend (Vue.js) taildwindcss

El frontend está desarrollado en Vue.js 3 junto con TypeScript, utilizando un stack moderno de herramientas y tecnologías que permiten crear una interfaz de usuario dinámica y eficiente.

- Componentes: Elementos reutilizables de la interfaz
- Stores: Gestión del estado con Pinia
- Views: Páginas principales de la aplicación
- Router: Configuración de rutas

## Base de Datos (MySQL) y ORM (SQLAlchemy)

### Base de Datos MySQL

- Tablas Principales: Usuarios, Productos, Órdenes, Categorías
- Relaciones: Manejo de relaciones uno a muchos y muchos a muchos
- Índices: Optimización de búsquedas frecuentes
- Triggers: Automatización de procesos de datos

### SQLAlchemy ORM

- Modelos: Representación de tablas como clases Python
- Queries: Consultas programáticas y seguras
- Migraciones: Control de versiones de la base de datos
- Validaciones: Reglas de integridad y validación de datos

### Ventajas Principales

- Seguridad contra SQL injection
- Código más mantenible y limpio
- Abstracción de la base de datos
- Facilidad en el manejo de relaciones

![mermaid-diagram-2024-12-11-215625](https://github.com/user-attachments/assets/4913f5f8-3dc2-4268-b0d4-190c9af7400d)

## Cómo Ejecutar el Proyecto

```bash

$ git clone https://github.com/tu_usuario/customconnect.git
$ cd customconnect

```

```bash

$ docker-compose up --build

```

Accede a la Aplicación:

- Frontend: Abre un navegador y ve a http://localhost:8080.
- Backend: La API de FastAPI está disponible en http://localhost:8000.
- Documentación API: http://localhost:8000/docs


## Sigueme

- Author - [maycol roa](https://www.linkedin.com/in/maycol-david-roa-trivi%C3%B1o-14b27a106/)
- Website - [portafolio](https://maycol.webflow.io/about)

- Author - [Alam Crhistopher Alvarez Vargas](https://www.linkedin.com/in/alam-alvarez-986b742b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)

- Author - [Milet ruiz lozano](https://www.linkedin.com/in/milet-ruiz-940337206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

