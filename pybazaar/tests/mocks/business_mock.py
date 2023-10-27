from datetime import datetime
from typing import Optional
from factory import Faker, Sequence, Factory
from factory.alchemy import SQLAlchemyModelFactory

from tests.conftest import SyncSession
from app.models.business_model import Business, BusinessCreate, BusinessUpdate


class BusinessFactory(SQLAlchemyModelFactory):
    class Meta:
        model = Business
        sqlalchemy_session = SyncSession
        sqlalchemy_session_persistence = "commit"

    id = Sequence(lambda n: n)

    name: str = Faker("company")
    about: str = Faker("text")
    instagram_url: Optional[str] = Faker("url")
    facebook_url: Optional[str] = Faker("url")
    contact_email: str = Faker("free_email")
    contact_phone: str = Faker("phone_number")
    established: datetime = Faker("date_time")
    raiting: float = Faker(
        "pyfloat", positive=True, min_value=0.1, max_value=5)


class BusinessCreateFactory(Factory):
    class Meta:
        model = BusinessCreate

    name: str = Faker("company")
    about: str = Faker("text")
    instagram_url: Optional[str] = Faker("url")
    facebook_url: Optional[str] = Faker("url")
    contact_email: str = Faker("free_email")
    contact_phone: str = Faker("phone_number")
    established: datetime = Faker("date_time")


class BusinessUpdateFactory(Factory):
    class Meta:
        model = BusinessUpdate

    name: Optional[str] = None
    about: Optional[str] = None
    instagram_url: Optional[str] = None
    facebook_url: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    established: Optional[str] = None


class BusinessServiceMock:

    async def get_by_id(self, business_id):
        business = BusinessFactory.build()
        business.id = business_id
        return business

    async def create(self, business_create):
        return BusinessFactory.build(**business_create.model_dump())

    async def update(self, business_id, business_update):
        business = BusinessFactory.build()
        for key, val in business_update.model_dump().items():
            if val == None:
                continue
            setattr(business, key, val)
        business.id = business_id
        return business

    async def delete(self, business):
        return

    async def get_multi(self, pagination):
        businesses = BusinessFactory.build_batch(pagination.limit)
        return businesses
