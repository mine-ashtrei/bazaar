import pytest
from sqlalchemy import text
from sqlalchemy import select

from app.common.query import PaginationQueryParams
from app.services.business_service import BusinessService, get_business_service
from app.models.business_model import Business
from tests.mocks.business_mock import BusinessCreateFactory, BusinessFactory, BusinessUpdateFactory
from tests.conftest import SyncSession


@pytest.mark.business
class TestBusinessService:

    @pytest.fixture(scope="class", autouse=True)
    def setup_class(self, sync_engine):
        SyncSession.configure(bind=sync_engine)

    @pytest.fixture(scope="function")
    def business(self, setup_businesses) -> Business:
        yield BusinessFactory.create()

    @pytest.fixture(scope="function")
    def businesses(self, request, setup_businesses):
        nb = request.param.get("nb_business", 1)
        x = BusinessFactory.create_batch(nb)
        return x

    @pytest.fixture(scope="function", autouse=True)
    def setup_businesses(self):
        session = SyncSession()
        assert session.execute(
            text(f"SELECT COUNT(*) FROM {Business.__tablename__}")).scalar() == 0
        SyncSession.remove()
        yield
        session = SyncSession()
        session.execute(text(f"DELETE FROM {Business.__tablename__}"))
        session.commit()
        SyncSession.remove()

    @pytest.mark.asyncio
    async def test_get_service(self, session_async_db):
        async with session_async_db() as async_db:
            res = await get_business_service(async_db)
            assert isinstance(res, BusinessService)

    @pytest.mark.asyncio
    async def test_get_by_id(self, session_async_db, business):
        async with session_async_db() as async_db:
            business_service = BusinessService(async_db)
            ret = await business_service.get_by_id(business.id)
            for key, value in business.__dict__.items():
                if key.startswith("_"):
                    continue
                assert getattr(ret, key) == value

    @pytest.mark.parametrize("businesses", [{"nb_business": 3}], indirect=True)
    @pytest.mark.parametrize("limit, skip", [(2, 0), (2, 1)])
    @pytest.mark.asyncio
    async def test_get_multi(self, session_async_db, businesses, limit, skip):
        async with session_async_db() as async_db:
            business_service = BusinessService(async_db)
            pagination = PaginationQueryParams(limit=limit, skip=skip)
            ret = await business_service.get_multi(pagination)
            assert len(ret) == limit or len(ret) == len(businesses) - skip
            assert ret[0].id == businesses[skip].id

    @pytest.mark.asyncio
    async def test_create(self, session_async_db):
        async with session_async_db() as async_db:
            business_service = BusinessService(async_db)
            business_create = BusinessCreateFactory.build()
            business = await business_service.create(business_create)
            for key, value in business_create.model_dump().items():
                assert getattr(business, key) == value
            assert hasattr(business, "id")

    @pytest.mark.asyncio
    async def test_update(self, session_async_db, business):
        NAME = "new name"
        business_update = BusinessUpdateFactory.create(name=NAME)
        import ipdb
        ipdb.set_trace()
        async with session_async_db() as async_db:
            business_service = BusinessService(async_db)
            ret = await business_service.update(business.id, business_update)
            assert ret.name == NAME
            assert ret.id == business.id

    # @pytest.mark.asyncio
    # async def test_delete(self, session_async_db, business):
    #     async with session_async_db() as async_db:
    #         business_service = BusinessService(async_db)
    #         await business_service.delete(business)
    #         ret = await async_db.execute(select(Business).where(Business.id == business.id))
    #         ret = ret.scalars().first()
    #         assert ret == None
