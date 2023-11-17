import logging
from app.common.messages.common import ServerError

from app.models.address_model import AddressCreate, AddressCreateReturn
from app.services.address_service import AddressService

logger = logging.getLogger(__name__)


class AddressController:

    def __init__(self, address_service: AddressService) -> None:
        self.address_service = address_service

    @staticmethod
    def catch_all(func):
        async def wrapper(*args, **kwargs):
            try:
                return await func(*args, **kwargs)
            except Exception as e:
                logger.error(e)
                raise ServerError()
        return wrapper

    @catch_all
    async def create_address(self, address_create: AddressCreate) -> AddressCreateReturn:
        return await self.address_service.create(address_create)

    @catch_all
    async def get_address_by_id(self, address_id: int) -> AddressCreateReturn:
        return await self.address_service.get_by_id(address_id)

    @catch_all
    async def update_address_by_id(self, address_id: int, address_update: AddressCreate) -> AddressCreateReturn:
        return await self.address_service.update(address_id, address_update)

    @catch_all
    async def delete_address_by_id(self, address_id: int) -> dict[str, str]:
        await self.address_service.delete(address_id)
        return {'msg': 'Address deleted'}
