from fastapi import HTTPException


class UserAlreadyHasBusiness(HTTPException):
    def __init__(self, user_id: int):
        super().__init__(status_code=400,
                         detail=f"User with id {user_id} already has a business")


class UserDoesNotHaveBusiness(HTTPException):
    def __init__(self, user_id: int):
        super().__init__(status_code=400,
                         detail=f"User with id {user_id} does not have a business")
