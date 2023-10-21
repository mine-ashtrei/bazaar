from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from fastapi.testclient import TestClient
import sys
import os
import pytest
import asyncio

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./test.db"
SQL = "sqlite:///./test.db"


def init_db():
    from app.models import Base
    engine = create_async_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )

    TestingSessionLocal = async_sessionmaker(
        autocommit=False, autoflush=False, bind=engine)

    async def init_models():
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)

    asyncio.run(init_models())
    return TestingSessionLocal


@pytest.fixture(scope="session")
def session_sync_db():
    engine = create_engine(
        SQL, connect_args={"check_same_thread": False}
    )
    Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    return Session


@pytest.fixture(scope="function")
def db_session(session_sync_db):
    with session_sync_db() as db:
        yield db


@pytest.fixture(scope="session", autouse=True)
def client():
    # import after adding to PYTHONPATH the root directory of the project
    from app.main import app
    from app.db import get_async_session

    db_session = init_db()

    async def override_get_db():
        async with db_session() as session:
            yield session
    app.dependency_overrides[get_async_session] = override_get_db

    client = TestClient(app)
    yield client
