from typing import Any
from fastapi import HTTPException, status


class NotFound(HTTPException):
    def __init__(self, model, id: Any) -> None:
        super().__init__(status_code=404,
                         detail=f"{model.__name__.lower()} not found with id: {id}")


class CreateError(HTTPException):
    def __init__(self, model) -> None:
        super().__init__(status_code=500,
                         detail=f"Failed to create {model.__name__.lower()}")


class UpdateError(HTTPException):
    def __init__(self, model, id: Any) -> None:
        super().__init__(status_code=500,
                         detail=f"Failed to update {model.__name__.lower()} with id: {id}")


class AccessForbidden(HTTPException):
    def __init__(self):
        super().__init__(status_code=status.HTTP_403_FORBIDDEN,
                         detail=f"Access Forbidden")
