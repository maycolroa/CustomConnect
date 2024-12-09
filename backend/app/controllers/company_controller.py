from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.company_schema import CompanyCreate, Company
from app.services.company_service import create_company, get_companies, get_company, delete_company
from app.database import get_db

router = APIRouter()

@router.post("/", response_model=Company)
def create_new_company(company: CompanyCreate, db: Session = Depends(get_db)):
    return create_company(db, company)

@router.get("/", response_model=list[Company])
def read_companies(db: Session = Depends(get_db)):
    return get_companies(db)

@router.delete("/{company_id}")
def delete_existing_company(company_id: int, db: Session = Depends(get_db)):
    company = delete_company(db, company_id)
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    return {"message": "Company deleted successfully"}
