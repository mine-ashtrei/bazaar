from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status

from app.common.query import PaginationQueryParams
from app.controllers.business_controller import get_business_controller, BusinessController
from app.models.business_model import BusinessCreate, BusinessUpdate

router = APIRouter(prefix="/business", tags=["business"])


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_business(business_create: BusinessCreate,
                          business_controller: Annotated[BusinessController,
                                                         Depends(get_business_controller)]):
    return await business_controller.create_business(business_create)


@router.get("/me", status_code=status.HTTP_200_OK)
async def get_business(business_controller: Annotated[BusinessController,
                                                      Depends(get_business_controller)]):
    return await business_controller.get_business()


@router.put("/me", status_code=status.HTTP_200_OK)
async def update_business(business_update: BusinessUpdate,
                          business_controller: Annotated[BusinessController,
                                                         Depends(get_business_controller)]):
    return await business_controller.update_business(business_update)


@router.delete("/me", status_code=status.HTTP_204_NO_CONTENT)
async def delete_business(business_controller: Annotated[BusinessController,
                                                         Depends(get_business_controller)]):
    return await business_controller.delete_business()

##################### SUPERUSER ONLY #####################
@router.get("/", status_code=status.HTTP_200_OK)
async def get_businesses(business_controller: Annotated[BusinessController,
                                                      Depends(get_business_controller)]):
    return await business_controller.get_businesses()

@router.get("/{business_id}", status_code=status.HTTP_200_OK)
async def get_business_id(business_id: int,
                          business_controller: Annotated[BusinessController,
                                                      Depends(get_business_controller)]):
    return await business_controller.get_business_id(business_id)


@router.put("/{business_id}", status_code=status.HTTP_200_OK)
async def update_business_id(business_id: int,
                             business_update: BusinessUpdate,
                             business_controller: Annotated[BusinessController,
                                                         Depends(get_business_controller)]):
    return await business_controller.update_business_id(business_update)


@router.delete("/{business_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_business_id(business_id: int,
                             business_controller: Annotated[BusinessController,
                                                         Depends(get_business_controller)]):
    return await business_controller.delete_business_id(business_id)
