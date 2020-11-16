"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const auth_1 = __importDefault(require("./routes/auth"));
class Routes {
    constructor() {
        this.app = express_1.default();
        this.registerRoutes();
    }
    registerRoutes() {
        const router = express_1.default.Router();
        this.app.use("/auth", auth_1.default(router));
        this.app.use("/api", api_1.default(router));
    }
}
exports.default = new Routes().app;
//# sourceMappingURL=routes.js.map