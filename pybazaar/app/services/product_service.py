from typing import List, Union
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import Depends

from app.common.query import SearchQuery, SearchQueryParams
from app.db import get_async_session
from app.models.product_model import ProductSchema, ProductCreate, ProductModel


class ProductSearchQueryParams(SearchQueryParams):

    def __init__(self, skip: int = 0, limit: int = 100, supplier: Union[str, None] = None) -> None:
        super().__init__(skip, limit)


class ProductService:

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def create_product(self, product: ProductCreate) -> ProductModel:
        product_db = ProductSchema(**product.model_dump())
        self.db.add(product_db)
        await self.db.commit()
        await self.db.refresh(product_db)
        return ProductModel.model_validate(product_db)

    async def get_products(self, searchParams: SearchQueryParams) -> List[ProductModel]:
        filtered_products = select(ProductSchema)
        products = await self.db.execute(SearchQuery.pagination(filtered_products, searchParams))
        return products.scalars().all()

    async def get_product(self, product_id: int) -> ProductModel:
        product = await self.db.execute(select(ProductSchema).filter(ProductSchema.id == product_id))
        return product.scalars().first()


async def get_product_service(db: AsyncSession = Depends(get_async_session)) -> ProductService:
    return ProductService(db)
