import uuid
from typing import Optional

from fastapi import Depends, Request, status, HTTPException
from fastapi_users import BaseUserManager, FastAPIUsers, UUIDIDMixin
from fastapi_users.authentication import (
    AuthenticationBackend,
    BearerTransport,
    JWTStrategy,
)
from fastapi_users.db import SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_async_session
from app.models.user_model import User

SECRET = "SECRET"


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)


class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def on_after_register(self, user: User, request: Optional[Request] = None):
        print(f"User {user.id} has registered.")

    async def on_after_forgot_password(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_request_verify(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(
            f"Verification requested for user {user.id}. Verification token: {token}")


async def get_user_manager(user_db: SQLAlchemyUserDatabase = Depends(get_user_db)):
    yield UserManager(user_db)


bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")


def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)


auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)

fastapi_users = FastAPIUsers[User, uuid.UUID](get_user_manager, [auth_backend])

def superuser_only(func):
    def check(*args, **kwargs):
        # Check if the first argument is an instance of the defining class
        if not args or not isinstance(args[0], func.__qualname__.split(".")[0]):
            raise ValueError("Expected method's first argument to be 'self'")

        instance = args[0]
        if not instance.current_user.is_superuser:
            raise HTTPException(status_code= status.HTTP_403_FORBIDDEN)
        func(*args, **kwargs)
    return check


user_manager = fastapi_users.get_user_manager
current_user = fastapi_users.current_user()
current_active_user = fastapi_users.current_user(active=True)
current_superuser = fastapi_users.current_user(superuser=True)
