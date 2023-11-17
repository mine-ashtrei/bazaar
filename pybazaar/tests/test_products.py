# from app.models.product_model import Product
# import pytest


# class TestProducts:

#     NB_PRODUCTS = 10

#     def _get_product_create(self, index: int = 0):
#         return {
#             "name": f"Test Product {index}",
#             "category": "women",
#         }

#     @pytest.fixture(scope="function")
#     def create_product(self, db_session):
#         db_session.add(Product(**self._get_product_create()))
#         db_session.commit()
#         yield
#         db_session.rollback()

#     @pytest.fixture(scope="function")
#     def create_ten_products(self, db_session):
#         for i in range(self.NB_PRODUCTS):
#             db_session.add(Product(**self._get_product_create(i)))
#         db_session.commit()
#         yield
#         db_session.rollback()

#     @pytest.mark.parametrize('queryParams', [(0, 10), (0, 5), (5, 5)])
#     def test_get_products_success(self, client, create_ten_products, queryParams):
#         skip, limit = queryParams
#         response = client.get(
#             "/product", params={"skip": skip, "limit": limit})
#         json = response.json()
#         assert response.status_code == 200
#         assert len(json) == limit, json
#         for index, res in enumerate(json):
#             name_index = int(res["name"].split(" ")[-1])
#             assert name_index == skip + index

#     def test_create_product_success(self, client):
#         product_create = self._get_product_create()
#         response = client.post("/product", json=product_create)
#         assert response.status_code == 201

#     @pytest.mark.parametrize('product_create, expected_type', [
#         ({"name": "", "category": ""}, "string_too_short"),
#         ({"name": "New"*50, "category": "women"*50}, "string_too_long"),
#     ])
#     def test_create_product_with_invalid_data(self, client, product_create, expected_type):
#         response = client.post("/product", json=product_create)
#         json = response.json()
#         assert response.status_code == 422
#         assert all(
#             detail['type'] == expected_type and
#             ('name' in detail['loc'] or
#              'category' in detail['loc'])
#             for detail in json['detail']
#         ), json

#     def test_create_product_missing_fields(self, client):
#         response = client.post("/product", json={})
#         json = response.json()
#         assert response.status_code == 422
#         assert all(
#             detail['type'] == 'missing' and
#             ('name' in detail['loc'] or
#              'category' in detail['loc'])
#             for detail in json['detail']
#         ), json

#     def test_create_product_invalid_json(self, client):
#         response = client.post("/product", content="invalid json")
#         print(response.json())
#         assert response.status_code == 422
#         assert response.json()['detail'][0]['type'] == 'json_invalid'
