from typing import Any, Dict, Generic, Optional, Type, TypeVar
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from pydantic import BaseModel
from fastapi import HTTPException

from app.models import Base
from app.common.query import PaginationQueryParams, Pagination

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


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

    async def _update(self, id, **kwargs):
        await self.db.execute(update(self.model).filter(
            self.model.id == id, self.model.is_deleted == False).values(
                **kwargs
        ))
        await self.db.commit()

    async def get_by_id(self, id: Any) -> ModelType:
        obj = await self.db.execute(select(self.model).filter(self.model.id == id, self.model.is_deleted == False))
        obj = obj.scalars().first()
        return obj

    async def get_multi(self, pagination: PaginationQueryParams, filter: Optional[Dict] = {}) -> list[ModelType]:
        filtered_objs = select(self.model).filter(
            self.model.is_deleted == False, **filter)
        objs = await self.db.execute(Pagination.pagination(filtered_objs, pagination))
        return objs.scalars().all()

    async def create(self, obj: CreateSchemaType) -> ModelType:
        obj_db = self.model(**obj.model_dump())
        self.db.add(obj_db)
        await self.db.commit()
        await self.db.refresh(obj_db)
        return obj_db

    async def update(self, id: int, obj: UpdateSchemaType) -> ModelType:
        await self._update(id, **obj.model_dump())
        obj_db = await self.get_by_id(id)
        return obj_db

    async def delete(self, id: Any) -> None:
        await self._update(id, is_deleted=True)
