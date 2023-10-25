from typing import Any, Dict, Generic, Optional, Type, TypeVar
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from fastapi import HTTPException

from app.models import Base
from app.common.query import PaginationQueryParams, Pagination

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)

class NotFound(HTTPException):
    def __init__(self, model, id: Any) -> None:
        super().__init__(status_code=404, detail=f"{model.__name__.lower()} not found with id: {id}")


class CreateError(HTTPException):
    def __init__(self, model) -> None:
        super().__init__(status_code=500, detail=f"Failed to create {model.__name__.lower()}")


class UpdateError(HTTPException):
    def __init__(self, model, id: Any) -> None:
        super().__init__(status_code=500, detail=f"Failed to update {model.__name__.lower()} with id: {id}")


class ServiceBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, model: Type[ModelType], db: AsyncSession) -> None:
        """
        CRUD object with default methods to Create, Read, Update, Delete (CRUD).

        **Parameters**

        * `model`: A SQLAlchemy model class
        * `schema`: A Pydantic model (schema) class
        """
        self.model = model
        self.db = db

    async def get_by_id(self, id: Any) -> ModelType:
        obj = await self.db.execute(select(self.model).filter(self.model.id == id)).scalars().first()
        if not obj:
            raise NotFound(id)
        return 

    async def get_multi(self, pagination: PaginationQueryParams, filter: Optional[Dict] = {}) -> list[ModelType]:
        filtered_objs = select(self.model).filter_by(**filter)
        objs = await self.db.execute(Pagination.pagination(filtered_objs, pagination))
        return objs.scalars().all()

    async def create(self, obj: CreateSchemaType) -> ModelType:
        obj_db = self.model(**obj.model_dump())
        self.db.add(obj_db)
        await self.db.commit()
        await self.db.refresh(obj_db)
        if not obj_db:
            raise CreateError(self.model)
        return obj_db

    async def update(self, id: int, obj: UpdateSchemaType) -> ModelType:
        obj_db = await self.get_by_id(id)
        for field, value in obj.model_dump().items():
            setattr(obj_db, field, value)
        await self.db.commit()
        await self.db.refresh(obj_db)
        if not obj_db:
            raise UpdateError(self.model, id)
        return obj_db

    async def delete(self, obj: ModelType) -> None:
        self.db.delete(obj)
        await self.db.commit()
