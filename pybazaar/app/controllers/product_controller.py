from fastapi import Depends, HTTPException, status

from app.services.product_service import ProductService, get_product_service
from app.models.product_model import ProductCreate, ProductModel
from app.common.query import SearchQueryParams
from app.common.messages.product import ProductNotFoundException


class ProductController:

    def __init__(self, product_service):
        self.product_service = product_service

    async def create_product(self, product: ProductCreate) -> ProductModel:
        product = await self.product_service.create_product(product)
        if not product:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="Failed to create product")
        return product

    async def get_products(self, searchParams: SearchQueryParams) -> list[ProductModel]:
        product = await self.product_service.get_products(searchParams)
        return product

    async def get_product_by_id(self, product_id: int) -> ProductModel:
        product = await self.product_service.get_product_by_id(product_id)
        if not product:
            raise ProductNotFoundException(product_id)
        return product


async def get_product_controller(product_service: ProductService = Depends(get_product_service)) -> ProductController:
    return ProductController(product_service)
