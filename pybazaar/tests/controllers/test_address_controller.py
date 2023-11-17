from typing import AsyncGenerator
import pytest
import pytest_asyncio

from app.controllers.address_controller import AddressController
from app.common.messages.common import ServerError
from tests.mocks.address_mock import AddressCreateFactory, AddressServiceMock, AddressFactory, ServiceBadMock


class TestAddressController:

    @pytest_asyncio.fixture(scope="function", autouse=True)
    async def address_controller(self) -> AsyncGenerator[AddressController, None]:
        address_servive = AddressServiceMock(AddressFactory)
        yield AddressController(address_servive)

    @pytest.mark.asyncio
    async def test_get_address_id(self, address_controller: AddressController):
        address = await address_controller.get_address_by_id(1)
        assert address.id == 1

    @pytest.mark.asyncio
    async def test_update_address_id(self, address_controller: AddressController):
        adress_update = AddressCreateFactory.build()
        address = await address_controller.update_address_by_id(1, adress_update)
        assert address.id == 1

    @pytest.mark.asyncio
    async def test_delete_address_id(self, address_controller):
        ret = await address_controller.delete_address_by_id(1)
        assert ret == {'msg': 'Address deleted'}

    @pytest.mark.asyncio
    async def test_create_address(self, address_controller: AddressController):
        address_create = AddressCreateFactory.build()
        address = await address_controller.create_address(address_create)
        for key, value in address_create.model_dump().items():
            assert getattr(address, key) == value
        assert hasattr(address, "id")

    @pytest.mark.asyncio
    async def test_get_address_bad_id(self):
        bad_controller = AddressController(ServiceBadMock())
        with pytest.raises(ServerError):
            await bad_controller.get_address_by_id(1)
