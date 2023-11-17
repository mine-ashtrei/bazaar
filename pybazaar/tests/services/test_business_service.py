import pytest
import pytest_asyncio
from sqlalchemy import text

from app.common.query import PaginationQueryParams
from app.services.business_service import BusinessService, get_business_service
from app.models.business_model import Business
from tests.mocks.business_mock import BusinessCreateFactory, BusinessFactory


@pytest.mark.business
class TestBusinessService:

    @pytest_asyncio.fixture(scope="class", autouse=True)
    async def business_service(self, sessionmaker_async):
        async with sessionmaker_async() as session:
            yield BusinessService(session)

    @pytest_asyncio.fixture(scope="function", autouse=True)
    async def setup_businesses(self, async_session_function):
        res = await async_session_function.execute(
            text(f"SELECT COUNT(*) FROM {Business.__tablename__}"))
        assert res.scalar() == 0
        yield
        await async_session_function.execute(text(f"DELETE FROM {Business.__tablename__}"))
        await async_session_function.commit()

    @pytest_asyncio.fixture(scope="function")
    async def business(self) -> Business:
        yield await BusinessFactory.create()

    @pytest_asyncio.fixture(scope="function")
    async def businesses(self, request):
        nb = request.param.get("nb_business", 1)
        x = await BusinessFactory.create_batch(nb)
        return x

    @pytest.mark.asyncio
    async def test_get_service(self, business_service):
        assert isinstance(business_service, BusinessService)

    @pytest.mark.asyncio
    async def test_get_by_id(self, business_service, business):
        ret = await business_service.get_by_id(business.id)
        for key, value in business.__dict__.items():
            if key.startswith("_"):
                continue
            assert getattr(ret, key) == value

    @pytest.mark.parametrize("businesses", [{"nb_business": 3}], indirect=True)
    @pytest.mark.parametrize("limit, skip", [(2, 0), (2, 1)])
    @pytest.mark.asyncio
    async def test_get_multi(self, business_service, businesses, limit, skip):
        pagination = PaginationQueryParams(limit=limit, skip=skip)
        ret = await business_service.get_multi(pagination)
        assert len(ret) == limit or len(ret) == len(businesses) - skip
        assert ret[0].id == businesses[skip].id

    @pytest.mark.asyncio
    async def test_create(self, business_service):
        business_create = BusinessCreateFactory.build()
        business = await business_service.create(business_create)
        for key, value in business_create.model_dump().items():
            assert getattr(business, key) == value
        assert hasattr(business, "id")

    @pytest.mark.asyncio
    async def test_update(self, business_service, business):
        NAME = "new name"
        business_update = BusinessCreateFactory.create(**business.__dict__)
        business_update.name = NAME
        ret = await business_service.update(business.id, business_update)
        assert ret.name == NAME
        assert ret.id == business.id

    @pytest.mark.asyncio
    async def test_delete(self, business_service, business):
        await business_service.delete(business.id)
        ret = await business_service.get_by_id(business.id)
        assert ret is None
