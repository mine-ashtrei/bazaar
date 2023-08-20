import app from "../src/index";
import { createServer, Server } from "http";

export let server: Server;

export const startServer = () => {
  server = createServer(app);
};

export const closeServer = () => {
  server.close();
};
