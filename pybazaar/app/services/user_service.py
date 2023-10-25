from fastapi import Depends
from app.dependencies.auth_dependencies import UserManager, user_manager
from app.models.user_model import User, UserUpdate, UserCreate


class UserService:

    def __init__(self, user_manager: UserManager) -> None:
        self.user_manager = user_manager

    async def update(self, user_update: UserUpdate, user: User) -> User:
        return await self.user_manager.update(user_update, user, safe=True)
    
    async def create(self, user_create: UserCreate) -> User:
        return await self.user_manager.create(user_create, safe=True)


def get_user_service(user_manager: UserManager = Depends(user_manager)) -> UserService:
    return UserService(user_manager)
