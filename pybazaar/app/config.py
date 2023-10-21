from dotenv import dotenv_values
from pydantic import BaseModel


class Config(BaseModel):
    POSTGRES_HOST: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_PORT: str

    PORT: int
    JWT_SECRET: str

    class Config:
        from_attributes = True


config = Config(**dotenv_values(".env"))
