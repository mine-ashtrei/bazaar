from factory import Factory

from tests.mocks.business_mock import BusinessFactory

from app.models.user_model import User


class UserFactory(Factory):
    class Meta:
        model = User


class UserServiceMock:

    async def update(self, user_update, user):
        return user

    def create(self, is_superuser: bool = False, has_business: bool = False) -> User:
        if has_business:
            ID = 1
            BusinessFactory.reset_sequence(ID)
            business = BusinessFactory.build()
            return UserFactory(is_superuser=is_superuser, business_id=1, business=business)
        return UserFactory(is_superuser=is_superuser)
