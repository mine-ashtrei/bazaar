import minioClient from "../minio";
import { v4 as uuidv4 } from "uuid";
import { IPresignedUrl } from "../models/productImageModel";

export const generateImageName = async (fileName: string): Promise<string> => {
  const fileExtension = fileName.split(".").pop();
  const objectName = `products/${uuidv4()}.${fileExtension}`;
  return objectName;
};

export const createPresignUrl = async (
  fileName: string
): Promise<IPresignedUrl> => {
  const objectName = await generateImageName(fileName);
  const presignedUrl = await minioClient.presignedPutObject(
    "test-bucket",
    objectName,
    60 * 60 // URL expiry time in seconds
  );
  return {
    presignedUrl: presignedUrl,
    objectName: objectName,
  };
};
