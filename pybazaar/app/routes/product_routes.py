from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status

from app.common.query import PaginationQueryParams
from app.controllers.product_controller import get_product_controller, ProductController
from app.models.product_model import ProductCreate

router = APIRouter(prefix="/product", tags=["product"])


@router.post("/", response_model=ProductCreate, status_code=status.HTTP_201_CREATED,)
async def create_product(productCreate: ProductCreate,
                         product_controller: Annotated[ProductController,
                                                       Depends(get_product_controller)]):
    return await product_controller.create_product(productCreate)


@router.get("/")
async def get_products(searchParams: Annotated[PaginationQueryParams, Depends()],
                       product_controller: Annotated[ProductController,
                                                     Depends(get_product_controller)]):
    return await product_controller.get_products(searchParams)


@router.get("/{product_id}")
async def get_product(product_id: int,
                      product_controller: Annotated[ProductController,
                                                    Depends(get_product_controller)]):
    return await product_controller.get_product_by_id(product_id)
