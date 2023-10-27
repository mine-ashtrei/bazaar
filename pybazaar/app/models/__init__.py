from datetime import datetime

from sqlalchemy import String, DateTime, Float
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


# this needs to be here because of https://stackoverflow.com/questions/54118182/sqlalchemy-not-creating-tables
# all schemas must import from this Base in order to create the appropriate sql tables


class Base(DeclarativeBase):
    is_deleted: Mapped[bool] = mapped_column(default=False)
    # created_at: Mapped[datetime] = mapped_column(
    #     default=datetime.utcnow,
    #     server_default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        default=datetime.utcnow, onupdate=datetime.utcnow)
    pass
