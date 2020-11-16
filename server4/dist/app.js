"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApiRouter_1 = __importDefault(require("./routes/ApiRouter"));
const AuthRouter_1 = __importDefault(require("./routes/AuthRouter"));
class App {
    constructor() {
        this.app = express_1.default();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use((express_1.default.urlencoded({ extended: false })));
    }
    routes() {
        const router = express_1.default.Router();
        router.get("/", (req, res, next) => {
            res.status(200).json({ status: "Hi from server4 / " });
        });
        this.app.use("/", router);
        this.app.use("/api", ApiRouter_1.default);
        this.app.use("/auth", AuthRouter_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map