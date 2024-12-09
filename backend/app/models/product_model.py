from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True)
    price = Column(Float)
    size = Column(String(50))
    value = Column(Float)
    image_url = Column(String(500))
    company_id = Column(Integer, ForeignKey("companies.id"))
    company = relationship("Company", back_populates="products")
