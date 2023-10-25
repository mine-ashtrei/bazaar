from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from fastapi.testclient import TestClient
import sys
import os
import pytest
import asyncio

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.main import app
from app.db import get_async_session
from app.dependencies.auth_dependencies import current_active_user, current_user
from app.services.user_service import UserService, get_user_service
from app.models.user_model import User, UserCreate
from app.dependencies.auth_dependencies import UserManager, get_user_db
from fastapi_users.db import SQLAlchemyUserDatabase

import pytest_asyncio

SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./test.db"
SQL = "sqlite:///./test.db"


@pytest.fixture(scope="session")
def session_async_db():
    from app.models import Base
    engine = create_async_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )

    TestingSessionLocal = async_sessionmaker(
        engine, expire_on_commit=False)

    async def init_models():
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)

    asyncio.run(init_models())
    return TestingSessionLocal

# @pytest.fixture(scope="session")
# def session_sync_db():
#     engine = create_engine(
#         SQL, connect_args={"check_same_thread": False}
#     )
#     Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
#     return Session


# @pytest.fixture(scope="function")
# def db_session(session_sync_db):
#     with session_sync_db() as db:
#         yield db

@pytest.fixture(scope="session")
def async_db(session_async_db):
    async def override_get_db():
        async with session_async_db() as session:
            yield session
    return override_get_db

@pytest.fixture(scope="session")
def user(session_async_db):
    async def create_user():
        async with session_async_db() as session:
            user_manager = UserManager(SQLAlchemyUserDatabase(session, User))
            user = await user_manager.create(UserCreate(email="test@fashion.com", password="test"), safe=True)
            return user
    user = asyncio.run(create_user())
    async def get_user():
        yield user
    return get_user

def override_db(session_async_db, dependency_overrides):
    async def override_get_db():
        async with session_async_db() as session:
            yield session
    dependency_overrides[get_async_session] = override_get_db


@pytest.fixture(scope="session", autouse=True)
def client(session_async_db):
    override_db(session_async_db, app.dependency_overrides)
    client = TestClient(app)
    yield client

@pytest.fixture(scope="session")
def auth_client(session_async_db, user):
    override_db(session_async_db, app.dependency_overrides)
    app.dependency_overrides[current_active_user] = user
    app.dependency_overrides[current_user] = user
    client = TestClient(app)
    yield client

