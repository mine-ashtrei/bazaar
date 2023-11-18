from datetime import datetime
from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, DateTime, Float
from pydantic import BaseModel, Field, ConfigDict, field_validator

from app.models import Base
from app.common.validators import validate_email_field, validate_phone

MIN_STR_LEN = 5
MAX_STR_LEN = 50
ABOUT_STR_LEN = 200
PHONE_STR_LEN = 25


class Business(Base):
    __tablename__ = "business"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    about: Mapped[str] = mapped_column(String(ABOUT_STR_LEN))
    instagram_url: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    facebook_url: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    contact_email: Mapped[str] = mapped_column(String(MAX_STR_LEN))
    contact_phone: Mapped[str] = mapped_column(String(PHONE_STR_LEN))
    established: Mapped[datetime] = mapped_column(DateTime())
    raiting: Mapped[Optional[float]] = mapped_column(Float())

    users: Mapped[list["User"]] = relationship(back_populates="business")
    address: Mapped["Address"] = relationship()


NameType = Field(min_length=MIN_STR_LEN,
                 max_length=MAX_STR_LEN, example="Fashion House")
AboutType = Field(min_length=MIN_STR_LEN, max_length=ABOUT_STR_LEN,
                  example="business with passion and a lot of thing in it")
InstagramType = Field(min_length=MIN_STR_LEN, max_length=MAX_STR_LEN,
                      example="www.instagram.com/fashion_house")
FacebookType = Field(min_length=MIN_STR_LEN, max_length=MAX_STR_LEN,
                     example="www.facebook.com/fashion_house")
ContactEmailType = Field(min_length=MIN_STR_LEN,
                         max_length=MAX_STR_LEN, example="fashion@exampl.com")
ContactPhoneType = Field(min_length=MIN_STR_LEN,
                         max_length=PHONE_STR_LEN, example="+1234567890")
RaitingType = Field(ge=0, le=5, example=4.5)
CategoriesType = Field(example=["fashion", "clothes", "shoes"])
ImagesType = Field(example=["www.example.com/image1.png",
                            "www.example.com/image2.png"])


class BusinessBase(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    name: str = NameType
    about: str = AboutType
    instagram_url: Optional[str] = InstagramType
    facebook_url: Optional[str] = FacebookType
    contact_email: str = ContactEmailType
    contact_phone: str = ContactPhoneType
    established: datetime

    @field_validator('contact_email')
    @classmethod
    def validate_email(cls, v):
        return validate_email_field(v)

    @field_validator('contact_phone')
    @classmethod
    def validate_phone(cls, v):
        return validate_phone(v)


class BusinessCreateReturn(BusinessBase):
    id: int = Field(example=1)
    pass


class BusinessSchema(BusinessBase):

    id: int = Field(example=1)
    raiting: float = RaitingType
    # categories: list[str] = CategoriesType


class BusinessHighlight(BusinessSchema):
    image: str = Field(example="www.example.com/image.png")


class BusinessRead(BusinessSchema):
    images: list[str] = ImagesType


class BusinessCreate(BusinessBase):
    pass
