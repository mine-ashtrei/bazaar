import uuid
from typing import Optional
from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from fastapi_users import schemas
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, ForeignKey

from app.models import Base


class User(SQLAlchemyBaseUserTableUUID, Base):
    business: Mapped["Business"] = relationship(back_populates="users")
    business_id: Mapped[Optional[int]] = mapped_column(ForeignKey("business.id"))


class UserRead(schemas.BaseUser[uuid.UUID]):
    business_id: Optional[int] = None
    pass


class UserCreate(schemas.BaseUserCreate):
    pass


class UserUpdate(schemas.BaseUserUpdate):
    business_id: Optional[int] = None
