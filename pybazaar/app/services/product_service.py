from typing import Union
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import Depends

from app.common.query import Pagination, PaginationQueryParams
from app.db import get_async_session
from app.models.product_model import Product, ProductCreate, ProductModel


class ProductSearchQueryParams(PaginationQueryParams):

    def __init__(self, skip: int = 0, limit: int = 100, supplier: Union[str, None] = None) -> None:
        super().__init__(skip, limit)


class ProductService:

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def create_product(self, product: ProductCreate) -> ProductModel:
        product_db = Product(**product.model_dump())
        self.db.add(product_db)
        await self.db.commit()
        await self.db.refresh(product_db)
        return ProductModel.model_validate(product_db)

    async def get_products(self, searchParams: PaginationQueryParams) -> list[ProductModel]:
        filtered_products = select(Product)
        products = await self.db.execute(Pagination.pagination(filtered_products, searchParams))
        return products.scalars().all()

    async def get_product(self, product_id: int) -> ProductModel:
        product = await self.db.execute(select(Product).filter(Product.id == product_id))
        return product.scalars().first()


async def get_product_service(db: AsyncSession = Depends(get_async_session)) -> ProductService:
    return ProductService(db)
