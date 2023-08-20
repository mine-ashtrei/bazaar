AUTH:

- refresh tokens
- create workshop users

WORKSHOP:

- add tests for forbiden. A different user tries to access a forbidden workshop
- change test_workshop to testWorkshop
- only users with workshop role can create a workshop

PRODUCT:

- make each test independent. Create functions for each request and only verify the results in the tests
- if deleting don't delete only update a deleted field

REPO:

- check all dependencies and remove what is not needed
- craete docker-compose / k8s
