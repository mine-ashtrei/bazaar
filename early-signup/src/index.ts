import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import emailRouter from "./routes/emailRoutes";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import { stream } from "./logger";

dotenv.config();
const app = express();

const { MONGO_URL = `mongodb://mongodb:27017/emailDB` } = process.env;

app.use(morgan("tiny", { stream: stream }));
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/emails", emailRouter);

app.listen(5000, () => {
  console.log("Server is running on Port: 5000");
});
