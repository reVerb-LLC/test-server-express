import express from "express";
import route from "./routes";

class Api {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    const router = express.Router();
    this.app.use("/", route(router));
  }
}

export default new Api().app;
