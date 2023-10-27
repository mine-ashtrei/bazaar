from fastapi import Depends, HTTPException, status

from app.services.business_service import BusinessService, get_business_service
from app.services.user_service import UserService, get_user_service
from app.models.business_model import Business, BusinessCreate, BusinessSchema, BusinessCreateReturn, BusinessUpdate
from app.models.user_model import User, UserUpdate
from app.common.messages.business_messages import UserAlreadyHasBusiness, UserDoesNotHaveBusiness
from app.common.messages.common import NotFound
from app.common.query import PaginationQueryParams
from app.dependencies.auth_dependencies import current_active_user, superuser_only


class BusinessController:

    def __init__(self,
                 business_service: BusinessService,
                 current_user: User,
                 user_service: UserService):
        self.business_service = business_service
        self.current_user = current_user
        self.user_service = user_service

    def get_current_user_business(self):
        business_id = self.current_user.business_id
        if not business_id:
            raise UserDoesNotHaveBusiness(self.current_user.id)
        return business_id

    async def _get_and_check_by_id(self, business_id: int) -> Business:
        business = await self.business_service.get_by_id(business_id)
        if business == None:
            raise NotFound(Business, business_id)
        return business

    async def create_business(self, business_create: BusinessCreate) -> BusinessCreateReturn:
        if self.current_user.business_id:
            raise UserAlreadyHasBusiness(self.current_user.business_id)
        business = await self.business_service.create(business_create)
        await self.user_service.update(UserUpdate(business_id=business.id), self.current_user)
        return BusinessCreateReturn.model_validate(business)

    async def get_business(self) -> BusinessSchema:
        # get business for current user
        business_id = self.get_current_user_business()
        business = await self._get_and_check_by_id(business_id)
        return BusinessSchema.model_validate(business)

    async def update_business(self, business_update: BusinessUpdate) -> BusinessSchema:
        business_id = self.get_current_user_business()
        business = await self.business_service.update(business_id, business_update)
        return BusinessSchema.model_validate(business)

    async def delete_business(self) -> dict[str, str]:
        business_id = self.get_current_user_business()
        business = await self._get_and_check_by_id(business_id)
        # await self.user_service.update(UserUpdate(business_id=None), self.current_user)
        await self.business_service.delete(business)
        return {'msg': 'Business deleted'}

    @superuser_only
    async def get_businesses(self, pagination: PaginationQueryParams) -> list[BusinessCreateReturn]:
        businesses = await self.business_service.get_multi(pagination)
        return [BusinessCreateReturn.model_validate(business) for business in businesses]

    @superuser_only
    async def get_business_id(self, business_id: int) -> BusinessCreateReturn:
        business = await self._get_and_check_by_id(business_id)
        return BusinessCreateReturn.model_validate(business)

    @superuser_only
    async def update_business_id(self, business_id: int, business_update: BusinessUpdate) -> BusinessCreateReturn:
        business = await self._get_and_check_by_id(business_id)
        return BusinessCreateReturn.model_validate(business)

    @superuser_only
    async def delete_business_id(self, business_id: int) -> dict[str, str]:
        business = await self._get_and_check_by_id(business_id)

        await self.business_service.delete(business)
        return {'msg': 'Business deleted'}


async def get_business_controller(business_service: BusinessService = Depends(get_business_service),
                                  current_user: User = Depends(
                                      current_active_user),
                                  user_service: UserService = Depends(get_user_service)) -> BusinessController:
    return BusinessController(business_service, current_user, user_service)
