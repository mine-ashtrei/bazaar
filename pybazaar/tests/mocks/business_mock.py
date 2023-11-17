from datetime import datetime
from typing import Optional
from factory import Faker, Sequence, Factory

from app.models.business_model import Business, BusinessCreate
from tests.mocks.base_mock import BaseMockAsync, BaseServiceMock


class BaseFactory(Factory):

    name: str = Faker("company")
    about: str = Faker("text")
    instagram_url: Optional[str] = Faker("url")
    facebook_url: Optional[str] = Faker("url")
    contact_email: str = Faker("free_email")
    contact_phone: str = Faker("phone_number")
    established: datetime = Faker("date_time")


class BusinessFactory(BaseMockAsync,
                      BaseFactory):
    class Meta:
        model = Business
        sqlalchemy_session = None
        sqlalchemy_session_persistence = "commit"

    id = Sequence(lambda n: n)
    raiting: float = Faker(
        "pyfloat", positive=True, min_value=0.1, max_value=5)


class BusinessCreateFactory(BaseFactory):
    class Meta:
        model = BusinessCreate


class BusinessServiceMock(BaseServiceMock[BaseFactory]):
    pass
