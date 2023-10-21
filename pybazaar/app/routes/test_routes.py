from fastapi import APIRouter, Depends

from app.dependencies.auth_dependencies import current_active_user
from app.models.user_model import User

router = APIRouter(prefix="/tests",
                   tags=["tests"],)


@router.get("/authenticated-route")
async def authenticated_route(user: User = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}
