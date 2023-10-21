from sqlalchemy.orm import DeclarativeBase

# this needs to be here because of https://stackoverflow.com/questions/54118182/sqlalchemy-not-creating-tables
# all schemas must import from this Base in order to create the appropriate sql tables


class Base(DeclarativeBase):
    pass
