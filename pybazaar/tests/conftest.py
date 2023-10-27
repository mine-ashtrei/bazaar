from fastapi_users.db import SQLAlchemyUserDatabase
from app.dependencies.auth_dependencies import UserManager, get_user_db
from app.models.user_model import User, UserCreate
from app.services.user_service import UserService, get_user_service
from app.dependencies.auth_dependencies import current_active_user, current_user
from app.db import get_async_session
from app.main import app
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from fastapi.testclient import TestClient
import pytest
import asyncio
import factory

from sqlalchemy.orm import scoped_session
from app.config import config

factory.Faker._get_faker().seed_instance(0)

# SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./test.db"
# SQL = "sqlite:///./test.db"

SQLALCHEMY_DATABASE_URL = f"postgresql+asyncpg://{config.POSTGRES_USER}:{config.POSTGRES_USER}@{config.POSTGRES_HOST}:{config.POSTGRES_PORT}/{config.POSTGRES_DB}"
SQL = f"postgresql://{config.POSTGRES_USER}:{config.POSTGRES_USER}@{config.POSTGRES_HOST}:{config.POSTGRES_PORT}/{config.POSTGRES_DB}"

SyncSession = scoped_session(sessionmaker())


@pytest.fixture(scope="session")
def sync_engine():
    engine = create_engine(
        SQL, connect_args={}
    )
    return engine


def get_sync_db():
    engine = create_engine(
        SQL, connect_args={}
    )
    Session = sessionmaker(autoflush=False, bind=engine)
    scoped = scoped_session
    return scoped_session(Session)


@pytest.fixture(scope="session")
def session_async_db():
    from app.models import Base
    engine = create_async_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={}
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
