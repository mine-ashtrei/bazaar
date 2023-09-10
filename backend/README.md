To generate errorMessages.ts and validationMessages.ts use 'npm run auto-gen'

To start mongodb server on macbook:

- install https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
- start with 'brew services start mongodb-community@6.0'
- stop with 'brew services stop mongodb-community@6.0'

To start minio server on mackbook

- install https://min.io/docs/minio/macos/index.html
- brew install minio/stable/minio
- run: minio server --console-address :9090 /Users/minescoviciu/development/minioShared/

To start reddis on macbook

- brew services start redis

In service aruncam toate erorile de tipul 500 si le logam
In controllere dam mai departe erorile din service cu 500

To start reddis on macbook

- https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/
