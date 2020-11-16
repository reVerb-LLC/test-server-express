import express from "express";
import ApiRouter from "./routes/ApiRouter";
import AuthRouter from "./routes/AuthRouter";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.app.use(express.json());
    this.app.use((express.urlencoded({ extended: false })));
  }

  private routes(): void {
    const router = express.Router();

    router.get("/", (req, res, next) => {
      res.status(200).json({ status: "Hi from server4 / " });
    });

    this.app.use("/", router);
    this.app.use("/api", ApiRouter);
    this.app.use("/auth", AuthRouter);
  }
}

export default new App().app;
