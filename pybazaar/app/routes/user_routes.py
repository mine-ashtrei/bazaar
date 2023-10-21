from fastapi import APIRouter

from app.models.user_model import UserRead, UserUpdate
from app.dependencies.auth_dependencies import fastapi_users

router = APIRouter(prefix="/users",
                   tags=["users"],)

router.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
)
