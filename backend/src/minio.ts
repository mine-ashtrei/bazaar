import { Client } from "minio";
import { config } from "./config";

const minioClient = new Client({
  endPoint: config.MINIO.ENDPOINT,
  port: config.MINIO.PORT,
  useSSL: false,
  accessKey: config.MINIO.ACCESS_KEY,
  secretKey: config.MINIO.SECRET_KEY,
});

export default minioClient;
