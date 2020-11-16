"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express_1 = require("express");
class ApiRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    root(req, res, next) {
        res.status(200).json({ status: "Hi from server4 /api/ " });
    }
    login(req, res, next) {
        res.status(200).json({ status: "API OK" });
    }
    signup(req, res, next) {
        res.status(200).json({ status: "API OK" });
    }
    init() {
        this.router.get("/", this.root);
        this.router.get("/login", this.login);
        this.router.get("/signup", this.signup);
    }
}
exports.ApiRouter = ApiRouter;
const apiRoute = new ApiRouter();
apiRoute.init();
exports.default = apiRoute.router;
//# sourceMappingURL=ApiRouter.js.map