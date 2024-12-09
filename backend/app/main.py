from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.controllers.auth_controller import router as auth_router
from app.controllers.company_controller import router as company_router
from app.controllers.product_controller import router as product_router
from app.database import engine, Base

app = FastAPI()

# Configurar CORS
origins = [
    "http://localhost:8080",  # Frontend en desarrollo
    "http://127.0.0.1:8080",  # Alternativa local
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir los orígenes definidos
    allow_credentials=True,  # Permitir cookies o credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados HTTP
)

# Crear las tablas en la base de datos
Base.metadata.create_all(bind=engine)

# Rutas
app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(company_router, prefix="/companies", tags=["Companies"])
app.include_router(product_router, prefix="/products", tags=["Products"])
