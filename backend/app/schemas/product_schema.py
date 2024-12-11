from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    name: str
    price: float
    size: str
    value: float
    image_url: str

class ProductCreate(ProductBase):
    company_id: int

class Product(ProductBase):
    id: int
    company_id: Optional[int]  # Agregamos este campo para que sea opcional en la respuesta

    class Config:
        orm_mode = True
