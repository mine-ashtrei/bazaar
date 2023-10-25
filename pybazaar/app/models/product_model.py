from typing import Optional, Union
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String
from pydantic import BaseModel, Field, ConfigDict
from app.models import Base


class Product(Base):
    __tablename__ = "product"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(50))
    category: Mapped[str] = mapped_column(String(50))


NameType = Field(min_length=5, max_length=50, example="Nice product")
CategoryType = Field(min_length=5, max_length=50, example="fashion")


class ProductModel(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = Field(example=1)
    name: str = NameType
    category: str = CategoryType


class ProductCreate(BaseModel):
    name: str = NameType
    category: str = CategoryType


class ProductUpdate(BaseModel):
    name: Union[str, None] = NameType
    category: Union[str, None] = CategoryType
