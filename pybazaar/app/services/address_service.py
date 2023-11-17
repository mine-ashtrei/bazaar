from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends

from app.models.address_model import AddressCreate, AddressSchema, Address
from app.services.base import ServiceBase
from app.db import get_async_session


class AddressService(ServiceBase[Address, AddressCreate, AddressSchema]):
    def __init__(self, db: AsyncSession) -> None:
        super().__init__(Address, db)


async def get_address_service(db: AsyncSession = Depends(get_async_session)) -> AddressService:
    return AddressService(db)
