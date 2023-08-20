import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import redisClient, { connectRedis } from "../src/redis";

let mongo: MongoMemoryServer;

export const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
  await connectRedis();
};

export const disconnectDB = async () => {
  if (mongo) {
    await mongoose.disconnect();
    mongo.stop();
    redisClient.disconnect();
  }
};

export const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

export const dropCollections = async () => {
  if (mongo) {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.drop();
    }
  }
};
