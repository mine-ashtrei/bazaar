from fastapi import FastAPI
from contextlib import asynccontextmanager

from app.db import create_db_and_tables
from app.routes.product_routes import router as product_router
from app.routes.auth_routes import router as auth_router
from app.routes.user_routes import router as user_router
from app.routes.business_routes import router as business_router
from app.logger import init_logger, logger
from app.config import config


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_logger()
    logger.info("Starting up...")
    logger.warning("This is a warning")
    logger.error("This is an error")
    logger.debug("This is a debug message")
    # Not needed if you setup a migration system like Alembic
    # await create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(product_router)
app.include_router(business_router)
