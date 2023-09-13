import { config } from "./config";
import { createServer, Server } from "http";
import express, { Request, Response, NextFunction, Express } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { logger, stream } from "./logger";
import { connectDB } from "./db";
import { connectRedis } from "./redis";

import { MESSAGES } from "./common/messages";

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import supplierRoutes from "./routes/supplierRoutes";
import productRoutes from "./routes/productRoutes";

const app: Express = express();

// Middleware
app.use(morgan("tiny", { stream: stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/products", productRoutes);

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err);
  console.log(err);
  res.status(500).json(MESSAGES.ERROR_SERVER);
});

// Catch-all handler for unknown routes
app.use((_req: Request, res: Response) => {
  console.log("Endpoint not found");
  res.status(404).json({ error: "Endpoint not found" });
});

const startDev = async () => {
  await connectDB();
  await connectRedis();
  const server: Server = createServer(app);
  server.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
  });
};

if (process.env.NODE_ENV !== "test") {
  // do not start server in test
  // let the tests open and close it
  startDev();
}

export default app;
