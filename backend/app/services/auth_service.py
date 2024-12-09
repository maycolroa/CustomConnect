from sqlalchemy.orm import Session
from app.models.user import User
from app.utils.security import hash_password, verify_password

def create_user(db: Session, username: str, password: str) -> User:
    hashed_password = hash_password(password)
    user = User(username=username, hashed_password=hashed_password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def authenticate_user(db: Session, username: str, password: str) -> User:
    user = db.query(User).filter(User.username == username).first()
    if user and verify_password(password, user.hashed_password):
        return user
    return None
