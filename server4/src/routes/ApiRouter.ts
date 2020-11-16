import { Router, Request, Response, NextFunction } from "express";

export class ApiRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public root(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ status: "Hi from server4 /api/ " });
  }

  public login(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ status: "API OK" });
  }

  public signup(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ status: "API OK" });
  }

  init() {
    this.router.get("/", this.root);
    this.router.get("/login", this.login);
    this.router.get("/signup", this.signup);
  }
}

const apiRoute = new ApiRouter();
apiRoute.init();

export default apiRoute.router;
