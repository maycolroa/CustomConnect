from pydantic import BaseModel

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

    class Config:
        orm_mode = True
