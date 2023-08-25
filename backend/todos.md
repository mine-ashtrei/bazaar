AUTH:

- refresh tokens
- create Supplier users

SUPPLIER:

- add tests for forbiden. A different user tries to access a forbidden supplier
- change test_supplier to testSupplier
- only users with supplier role can create a supplier

PRODUCT:

- make each test independent. Create functions for each request and only verify the results in the tests
- if deleting don't delete only update a deleted field

REPO:

- check all dependencies and remove what is not needed
- craete docker-compose / k8s
