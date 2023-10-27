import pytest


class TestBusinessRoutes:

    def _get_business_dict(self):
        return {
            "name": "Fashion House",
            "about": "business with passion and a lot of thing in it",
            "instagram_url": "www.instagram.com/fashion_house",
            "facebook_url": "www.facebook.com/fashion_house",
            "contact_email": "fashion@fashion.com",
            "contact_phone": "+1234567890",
            "established": "14:15:26",
        }

    @pytest.fixture(scope="function")
    def jwt(self, client):
        # register user
        response = client.post("/auth/register", json={
            "email": "test@fashion.com",
            "password": "test",
        })
        assert response.status_code == 201, response.json()
        # login user
        response = client.post("/auth/jwt/login", data={
            "username": "test@fashion.com",
            "password": "test",
        })
        assert response.status_code == 200, response.json()
        return response.json()["access_token"]

    # def test_create_business_unauthorized(self, client):
    #     response = client.post("/business", json=self._get_business_model_dump())
    #     assert response.status_code == 401, response.json()

    # def test_create_business(self, auth_client):
    #     # response = client.post("/business", json=self._get_business_model_dump(), headers={
    #     #     "Authorization": f"Bearer {jwt}"
    #     # })
    #     response = auth_client.post("/business", json=self._get_business_model_dump())
    #     print(response.json())
    #     assert response.status_code == 201, response.json()
