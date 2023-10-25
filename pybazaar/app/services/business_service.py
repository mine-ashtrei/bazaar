from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import Depends

from app.models.business_model import BusinessCreate, BusinessSchema, Business
from app.services.base import ServiceBase
from app.db import get_async_session


class BusinessService(ServiceBase[Business, BusinessCreate, BusinessSchema]):

    def __init__(self, db: AsyncSession) -> None:
        super().__init__(Business, db)


async def get_business_service(db: AsyncSession = Depends(get_async_session)) -> BusinessService:
    return BusinessService(db)
