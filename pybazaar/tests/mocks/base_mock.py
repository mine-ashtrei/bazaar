from factory.alchemy import SQLAlchemyModelFactory, SESSION_PERSISTENCE_COMMIT, SESSION_PERSISTENCE_FLUSH
from typing import Any, Generic, TypeVar
from factory import Factory


class BaseMockAsync(SQLAlchemyModelFactory):

    @classmethod
    async def _create(cls, model_class, *args, **kwargs):
        """Create an instance of the model, and save it to the database."""
        session_factory = cls._meta.sqlalchemy_session_factory
        if session_factory:
            cls._meta.sqlalchemy_session = session_factory()

        session = cls._meta.sqlalchemy_session

        if session is None:
            raise RuntimeError("No session provided.")
        if cls._meta.sqlalchemy_get_or_create:
            raise RuntimeError("No get_or_create provided.")
            # return cls._get_or_create(model_class, session, args, kwargs)
        return await cls._save(model_class, session, args, kwargs)

    @classmethod
    async def _save(cls, model_class, session, args, kwargs):
        session_persistence = cls._meta.sqlalchemy_session_persistence

        obj = model_class(*args, **kwargs)
        async with session() as db:
            db.add(obj)
            if session_persistence == SESSION_PERSISTENCE_FLUSH:
                await db.flush()
            elif session_persistence == SESSION_PERSISTENCE_COMMIT:
                await db.commit()
        return obj

    # override create_batch to use async
    @classmethod
    async def create_batch(cls, size, **kwargs):
        """Create a batch of instances of the given class, with overridden attrs.

        Args:
            size (int): the number of instances to create

        Returns:
            object list: the created instances
        """
        return [await cls.create(**kwargs) for _ in range(size)]


FactoryType = TypeVar("FactoryType", bound=Factory)


class BaseServiceMock(Generic[FactoryType,]):

    def __init__(self, factory: FactoryType) -> None:
        self.factory = factory

    async def get_by_id(self, id: Any) -> FactoryType:
        obj = self.factory.build()
        obj.id = id
        return obj

    async def get_multi(self, pagination: Any, filter: Any = {}) -> list[FactoryType]:
        return [self.factory.build() for _ in range(pagination.limit)]

    async def create(self, obj: Any) -> FactoryType:
        obj = self.factory.build(**obj.model_dump())
        return obj

    async def update(self, id: int, obj: Any) -> FactoryType:
        obj = self.factory.build(**obj.model_dump())
        obj.id = id
        return obj

    async def delete(self, id: Any) -> None:
        return


class ServiceBadMock(Generic[FactoryType]):

    async def get_by_id(self, id: Any) -> FactoryType:
        raise Exception("Bad")
