from fastapi_users.db import SQLAlchemyUserDatabase
from app.dependencies.auth_dependencies import UserManager, get_user_db
from app.models.user_model import User, UserCreate
from app.services.user_service import UserService, get_user_service
from app.dependencies.auth_dependencies import current_active_user, current_user
from app.db import get_async_session
from app.main import app
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine, async_scoped_session
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from fastapi.testclient import TestClient
import pytest
import pytest_asyncio
import asyncio
import factory
from asyncio import current_task

from sqlalchemy.orm import scoped_session
from app.config import config
from tests.mocks.business_mock import BusinessFactory

factory.Faker._get_faker().seed_instance(0)

# SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./test.db"
# SQL = "sqlite:///./test.db"

SQLALCHEMY_DATABASE_URL = f"postgresql+asyncpg://{config.POSTGRES_USER}:{config.POSTGRES_USER}@{config.POSTGRES_HOST}:{config.POSTGRES_PORT}/{config.POSTGRES_DB}"
# SQL = f"postgresql://{config.POSTGRES_USER}:{config.POSTGRES_USER}@{config.POSTGRES_HOST}:{config.POSTGRES_PORT}/{config.POSTGRES_DB}"


@pytest.fixture(scope="session", autouse=True)
def event_loop(request):
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest_asyncio.fixture(scope="session")
def async_engine():
    engine = create_async_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={}
    )
    return engine


@pytest_asyncio.fixture(scope="session")
async def sessionmaker_async(async_engine):
    from app.models import Base
    global AyncSession
    TestingSessionLocal = async_sessionmaker(
        async_engine, expire_on_commit=False)
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    BusinessFactory._meta.sqlalchemy_session = TestingSessionLocal

    return TestingSessionLocal


@pytest_asyncio.fixture(scope="class")
async def async_session_class(sessionmaker_async):
    async with sessionmaker_async() as session:
        yield session


@pytest_asyncio.fixture(scope="function")
async def async_session_function(sessionmaker_async):
    async with sessionmaker_async() as session:
        yield session

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

# @pytest.fixture(scope="session")
# def user(session_async_db):
#     async def create_user():
#         async with session_async_db() as session:
#             user_manager = UserManager(SQLAlchemyUserDatabase(session, User))
#             user = await user_manager.create(UserCreate(email="test@fashion.com", password="test"), safe=True)
#             return user
#     user = asyncio.run(create_user())

#     async def get_user():
#         yield user
#     return get_user


def override_db(sessionmaker_async, dependency_overrides):
    async def override_get_db():
        async with sessionmaker_async() as session:
            yield session
    dependency_overrides[get_async_session] = override_get_db


@pytest.fixture(scope="session", autouse=True)
def client(sessionmaker_async):
    override_db(sessionmaker_async, app.dependency_overrides)
    client = TestClient(app)
    yield client


@pytest.fixture(scope="session")
def auth_client(sessionmaker_async, user):
    override_db(sessionmaker_async, app.dependency_overrides)
    app.dependency_overrides[current_active_user] = user
    app.dependency_overrides[current_user] = user
    client = TestClient(app)
    yield client
