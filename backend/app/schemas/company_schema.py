from pydantic import BaseModel
from typing import List

class ProductBase(BaseModel):
    name: str
    price: float
    size: str
    value: float
    image_url: str

class Product(ProductBase):
    id: int
    company_id: int

    class Config:
        orm_mode = True

class CompanyBase(BaseModel):
    name: str
    description: str

class CompanyCreate(CompanyBase):
    pass

class Company(CompanyBase):
    id: int
    products: List[Product] = []

    class Config:
        orm_mode = True
