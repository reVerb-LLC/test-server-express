"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
class Api {
    constructor() {
        this.app = express_1.default();
        this.registerRoutes();
    }
    registerRoutes() {
        const router = express_1.default.Router();
        this.app.use("/", routes_1.default(router));
    }
}
exports.default = new Api().app;
//# sourceMappingURL=api.js.map