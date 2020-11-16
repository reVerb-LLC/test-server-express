import { Router, Request, Response, NextFunction } from "express";

export class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public root(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ status: "Hi from server4 /auth/ " });
  }

  public verify(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ status: "API OK" });
  }

  public create(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ status: "API OK" });
  }

  init() {
    this.router.get("/", this.root);
    this.router.get("/verify", this.verify);
    this.router.get("/create", this.create);
  }
}

const authRoute = new AuthRouter();
authRoute.init();

export default authRoute.router;