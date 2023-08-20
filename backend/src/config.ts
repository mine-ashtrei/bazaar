import dotenv from "dotenv";
dotenv.config();

const {
  DB_NAME = "souk",
  DB_CONNECTION_STRING = `mongodb://localhost:27017/${DB_NAME}`,
  JWT_SECRET = "verylongandsecuresecret",
  JWT_EXPIRATION = "1h",
  PORT = 3000,
  REDIS_CONNECTION_STRING = "redis://localhost:6379",
  MINIO_ENDPOINT = "127.0.0.1",
  MINIO_PORT = "9000",
  MINIO_ACCESS_KEY = "minioadmin",
  MINIO_SECRET_KEY = "minioadmin",
} = process.env;

//maybe also add some validations here
const minioPort = parseInt(MINIO_PORT, 10);

export const config = {
  DB: {
    CONNECTION_STRING: DB_CONNECTION_STRING,
    NAME: DB_NAME,
  },
  JWT: {
    SECRET: JWT_SECRET,
    EXPIRATION: JWT_EXPIRATION,
  },
  PORT: PORT,
  REDIS_CONNECTION_STRING: REDIS_CONNECTION_STRING,
  MINIO: {
    ENDPOINT: MINIO_ENDPOINT,
    PORT: minioPort,
    ACCESS_KEY: MINIO_ACCESS_KEY,
    SECRET_KEY: MINIO_SECRET_KEY,
  },
};
