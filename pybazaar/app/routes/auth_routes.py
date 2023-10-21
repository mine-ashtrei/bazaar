from fastapi import APIRouter

from app.models.user_model import UserCreate, UserRead
from app.dependencies.auth_dependencies import auth_backend, fastapi_users

router = APIRouter(prefix="/auth",
                   tags=["auth"],)

router.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
router.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
)
router.include_router(
    fastapi_users.get_reset_password_router(),
)
router.include_router(
    fastapi_users.get_verify_router(UserRead),
)
