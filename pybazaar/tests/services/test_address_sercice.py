import pytest
import pytest_asyncio
from sqlalchemy import text
from app.services.address_service import AddressService, get_address_service


class TestAddressSevice:

    @pytest_asyncio.fixture(scope="class", autouse=True)
    async def address_service(self, sessionmaker_async):
        async with sessionmaker_async() as session:
            yield AddressService(session)

    @pytest.mark.asyncio
    async def test_get_service(self, address_service):
        assert isinstance(address_service, AddressService)
