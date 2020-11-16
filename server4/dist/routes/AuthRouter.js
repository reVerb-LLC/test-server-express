"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
class AuthRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    root(req, res, next) {
        res.status(200).json({ status: "Hi from server4 /auth/ " });
    }
    verify(req, res, next) {
        res.status(200).json({ status: "API OK" });
    }
    create(req, res, next) {
        res.status(200).json({ status: "API OK" });
    }
    init() {
        this.router.get("/", this.root);
        this.router.get("/verify", this.verify);
        this.router.get("/create", this.create);
    }
}
exports.AuthRouter = AuthRouter;
const authRoute = new AuthRouter();
authRoute.init();
exports.default = authRoute.router;
//# sourceMappingURL=AuthRouter.js.map