import pytest
from app.common.messages.business_messages import UserDoesNotHaveBusiness, UserAlreadyHasBusiness
from app.common.messages.common import AccessForbidden
from app.common.query import PaginationQueryParams
from app.controllers.business_controller import BusinessController, get_business_controller
from app.models.user_model import User
from app.models.business_model import BusinessCreate
from app.services.business_service import BusinessService
from app.services.user_service import UserService


from tests.mocks.business_mock import BusinessServiceMock, BusinessCreateFactory, BusinessFactory
from tests.mocks.user import UserServiceMock


@pytest.mark.business
class TestBusinessController:

    @pytest.fixture(scope="function")
    def fake_business_create_id(self, request) -> BusinessCreate:
        ID = 1
        BusinessFactory.reset_sequence(ID)
        yield BusinessCreateFactory.build(), ID

    @pytest.fixture(scope="function")
    def business_controller(self, request) -> (BusinessController, User):
        business_service = request.param.get(
            'business_service', BusinessServiceMock(BusinessFactory))
        user_service = UserServiceMock()
        # create user based on the params
        is_superuser = request.param.get('is_superuser', False)
        has_business = request.param.get('has_business', False)
        user = user_service.create(
            is_superuser=is_superuser, has_business=has_business)
        return BusinessController(business_service, user, user_service), user

    @pytest.mark.parametrize("business_controller", [{"is_superuser": False, "has_business": True}], indirect=True)
    @pytest.mark.asyncio
    async def test_get_business(self, business_controller):
        controller, user = business_controller
        res = await controller.get_business()
        assert res.id == user.business_id

    @pytest.mark.parametrize("business_controller", [{"is_superuser": False, "has_business": False}], indirect=True)
    @pytest.mark.asyncio
    async def test_get_business_fail(self, business_controller):
        controller, _ = business_controller
        with pytest.raises(UserDoesNotHaveBusiness):
            await controller.get_business()

    @pytest.mark.parametrize("business_controller", [{"is_superuser": False, "has_business": False},
                                                     {"is_superuser": True, "has_business": False}], indirect=True)
    @pytest.mark.asyncio
    async def test_create_business(self, business_controller, fake_business_create_id):
        controller, _ = business_controller
        fake_business_create, ID = fake_business_create_id
        res = await controller.create_business(fake_business_create)
        assert res.id == ID
        for key, val in fake_business_create.__dict__.items():
            assert getattr(res, key, None) == val, f"{key} {val} is not equal"

    @pytest.mark.parametrize("business_controller", [{"is_superuser": True, "has_business": True},
                                                     {"is_superuser": True, "has_business": True}], indirect=True)
    @pytest.mark.asyncio
    async def test_create_business_user_with_business(self,
                                                      business_controller, fake_business_create_id):
        controller, _ = business_controller
        fake_business_create, _ = fake_business_create_id
        with pytest.raises(UserAlreadyHasBusiness):
            res = await controller.create_business(fake_business_create)

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': True},
                              {'is_superuser': True, 'has_business': True}], indirect=True)
    @pytest.mark.asyncio
    async def test_update_business(self, business_controller):
        controller, user = business_controller
        NAME = "tests"
        business_update = BusinessCreateFactory.build(name=NAME)
        res = await controller.update_business(business_update)
        assert res.name == NAME
        assert res.id == user.business_id

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': False},
                              {'is_superuser': True, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_update_business_no_business(self, business_controller):
        controller, _ = business_controller
        with pytest.raises(UserDoesNotHaveBusiness):
            res = await controller.get_business()

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': True},
                              {'is_superuser': True, 'has_business': True}], indirect=True)
    @pytest.mark.asyncio
    async def test_delete_business(self, business_controller):
        controller, _ = business_controller
        res = await controller.delete_business()
        assert res['msg'] == "Business deleted"

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': False},
                              {'is_superuser': True, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_delete_business_no_business(self, business_controller):
        controller, _ = business_controller
        with pytest.raises(UserDoesNotHaveBusiness):
            res = await controller.get_business()

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': True, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_get_businesses(self, business_controller):
        controller, _ = business_controller
        pagination = PaginationQueryParams(limit=10, skip=0)
        res = await controller.get_businesses(pagination)
        assert len(res) == pagination.limit

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_get_businesses_no_superuser_fail(self, business_controller):
        controller, _ = business_controller
        pagination = PaginationQueryParams(limit=10, skip=0)
        with pytest.raises(AccessForbidden):
            res = await controller.get_businesses(pagination)

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': True, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_get_business_id(self, business_controller):
        controller, _ = business_controller
        ID = 1
        res = await controller.get_business_id(ID)
        assert res.id == ID

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_get_business_id_no_superuser_fail(self, business_controller):
        controller, _ = business_controller
        ID = 1
        with pytest.raises(AccessForbidden):
            res = await controller.get_business_id(ID)

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': True, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_update_business_id(self, business_controller):
        controller, _ = business_controller
        NAME = "tests"
        ID = 1
        business_update = BusinessCreateFactory.build(name=NAME)
        res = await controller.update_business_id(ID, business_update)
        assert res.name == NAME
        assert res.id == ID

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_update_business_id_no_superuser_fail(self, business_controller):
        controller, _ = business_controller
        NAME = "tests"
        ID = 1
        business_update = BusinessCreateFactory.build(name=NAME)
        with pytest.raises(AccessForbidden):
            res = await controller.update_business_id(ID, business_update)

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': True, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_delete_business_id(self, business_controller):
        controller, _ = business_controller
        ID = 1
        res = await controller.delete_business_id(ID)
        assert res['msg'] == "Business deleted"

    @pytest.mark.parametrize("business_controller",
                             [{'is_superuser': False, 'has_business': False}], indirect=True)
    @pytest.mark.asyncio
    async def test_delete_business_id_no_superuser_fail(self, business_controller):
        controller, _ = business_controller
        ID = 1
        with pytest.raises(AccessForbidden):
            res = await controller.delete_business_id(ID)
