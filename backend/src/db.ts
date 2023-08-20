import mongoose from "mongoose";
import { logger } from "./logger";
import { config } from "./config";

export const connectDB = async () => {
  mongoose.connect(config.DB.CONNECTION_STRING);
  const db = mongoose.connection;
  db.on("error", (error) => {
    logger.error(error);
  });
  db.once("open", () => {
    logger.info("Connected to MongoDB");
  });
};
