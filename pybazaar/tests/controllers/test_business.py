import uuid
import pytest
import pytest_asyncio
import asyncio
from fastapi_users import FastAPIUsers
import factory
from pytest_factoryboy import register

from app.controllers.business_controller import BusinessController
from app.models.user_model import User, UserCreate
from app.models.business_model import Business, BusinessCreate
from app.services.business_service import BusinessService
from app.services.user_service import UserService
from app.dependencies.auth_dependencies import UserManager, auth_backend


class BusinessFactory(factory.Factory):
    class Meta:
        model = Business

    id = factory.Sequence(lambda n: n)
    name = factory.Faker("company")
    about = factory.Faker("text")
    instagram_url = factory.Faker("url")
    facebook_url = factory.Faker("url")
    contact_email = factory.Faker("email")
    contact_phone = factory.Faker("phone_number")
    established = factory.Faker("date_time")
    rating = factory.Faker("pyfloat", positive=True, min_value=0, max_value=5)


class UserFactory(factory.Factory):
    class Meta:
        model = User


class BusinessServiceMock:

    async def get_by_id(self, business_id):
        return Business(id=business_id, name="test business")

    async def create(self, business_create):
        return Business(id=1, name=business_create.name)

    async def update(self, business_id, business_update):
        return Business(id=business_id, name=business_update.name)

    async def delete(self, business):
        return business

    async def get_multi(self, pagination):
        return [Business(id=1, name="test business")]


class UserServiceMock:

    async def update(self, user_update, user):
        user.business_id = user_update.business_id
        return user

    def get(self, user_id):
        return User(id=user_id, email="")

    def create(self, is_superuser: bool = False) -> User:
        if is_superuser:
            return UserFactory(business_id=1, is_superuser=True)
        return UserFactory(is_superuser=False)


class TestBusinessController:

    @pytest.fixture(scope="class", autouse=True)
    def business_service(self) -> BusinessService:
        yield BusinessServiceMock()

    @pytest.fixture(scope="class", autouse=True)
    def user_service(self) -> UserService:
        yield UserServiceMock()

    @pytest.fixture(scope="class", autouse=True)
    def super_user(self, user_service) -> User:
        yield user_service.create(is_superuser=True)

    @pytest.fixture(scope="class", autouse=True)
    def user(self, user_service) -> User:
        yield user_service.create()

    @pytest.fixture(scope="class", autouse=True)
    def business_controller(self, business_service, user_service, user) -> BusinessController:
        yield BusinessController(business_service, user, user_service)

    @pytest.fixture(scope="class", autouse=True)
    async def business_controller_super(self, business_service, user_service, super_user) -> BusinessController:
        yield BusinessController(business_service, super_user, user_service)

    @pytest.mark.asyncio
    async def test_get_current_user_business(self, business_controller, user):
        import faker
        x = faker.Faker()
        b = await business_controller.create_business(BusinessCreate(name="test business",
                                                                     about="asdasasa",
                                                                     contact_email="test@fashion.com",
                                                                     contact_phone="+1234567890",
                                                                     instagram_url=None,
                                                                     facebook_url=None,
                                                                     established=str(x.date_time())))
        assert b.name == "test business"
        assert b.about == "asdasasa"
        assert business_controller.get_current_user_business() == user.business_id
