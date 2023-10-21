from fastapi import HTTPException


class ProductNotFoundException(HTTPException):
    def __init__(self, product_id: int):
        super().__init__(status_code=404,
                         detail=f"Product with id {product_id} not found")
