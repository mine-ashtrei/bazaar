from typing import Optional, List
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String
from pydantic import BaseModel, Field, ConfigDict
from app.models import Base


class ProductSchema(Base):
    __tablename__ = "product"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(150))
    category: Mapped[str] = mapped_column(String(50))


class ProductModel(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = Field(example=1)
    name: str = Field(example="Nice product")
    category: str = Field(example="fashion")


class ProductCreate(BaseModel):
    name: str = Field(min_length=5, max_length=50, example="Nice product")
    category: str = Field(min_length=5, max_length=50, example="fashion")
