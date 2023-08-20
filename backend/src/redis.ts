import { createClient } from "redis";
import { logger } from "./logger";
import { config } from "./config";

let redisClient = createClient({
  url: config.REDIS_CONNECTION_STRING,
});

export const connectRedis = async () => {
  redisClient.on("connect", () => {
    logger.info("Connected to Redis");
  });

  redisClient.on("error", (err) => {
    logger.error("Redis error: " + err);
  });
  await redisClient.connect();
};

export default redisClient;
