import uuid
from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from fastapi_users import schemas
from app.models import Base


class User(SQLAlchemyBaseUserTableUUID, Base):
    pass


class UserRead(schemas.BaseUser[uuid.UUID]):
    pass


class UserCreate(schemas.BaseUserCreate):
    pass


class UserUpdate(schemas.BaseUserUpdate):
    pass
