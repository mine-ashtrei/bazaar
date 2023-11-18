from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String
from pydantic import BaseModel, Field, ConfigDict

from app.models import Base

MAX_STR_LEN = 50

class AddressAssociation(Base):
    __tablename__ = "address_association"
    id: Mapped[int] = mapped_column(primary_key=True)
    parent_id: Mapped[int] = mapped_column()
    parent_type: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    address_id: Mapped[int] = mapped_column()


class Address(Base):
    __tablename__ = "address"

    id: Mapped[int] = mapped_column(primary_key=True)
    street: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    city: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    state: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    postal_code: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    country: Mapped[str] = mapped_column(String(MAX_STR_LEN))


StreetType = Field(min_length=1, max_length=MAX_STR_LEN, examples=["123 Main St"])
CityType = Field(min_length=1, max_length=MAX_STR_LEN, examples=[ "New York" ])
StateType = Field(min_length=1, max_length=MAX_STR_LEN, examples=[ "New York" ])
PostalCodeType = Field(min_length=1, max_length=MAX_STR_LEN, examples=[ "12345" ])
CountryType = Field(min_length=1, max_length=MAX_STR_LEN, examples=[ "USA" ])


class AddressBase(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    street: str = StreetType
    city: str = CityType
    state: str = StateType
    postal_code: str = PostalCodeType
    country: str = CountryType


class AddressSchema(AddressBase):
    id: int = Field(examples=[ 1 ])


class AddressCreateReturn(AddressBase):
    pass


class AddressCreate(AddressBase):
    pass
