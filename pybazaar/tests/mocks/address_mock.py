
from datetime import datetime
from typing import Optional
from factory import Faker, Sequence, Factory
from app.models.address_model import Address, AddressCreate

from tests.mocks.base_mock import BaseMockAsync, BaseServiceMock, ServiceBadMock


class BaseFactory(Factory):

    street: str = Faker("street_address")
    city: str = Faker("city")
    state: str = Faker("state")
    postal_code: str = Faker("zipcode")
    country: str = Faker("country")


class AddressFactory(BaseMockAsync, BaseFactory):
    class Meta:
        model = Address
        sqlalchemy_session = None
        sqlalchemy_session_persistence = "commit"

    id: int = Sequence(lambda n: n)


class AddressCreateFactory(BaseFactory):
    class Meta:
        model = AddressCreate


class AddressServiceMock(BaseServiceMock[AddressFactory]):
    pass
