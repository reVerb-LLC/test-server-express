"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
class Server {
}
Server.port = 3004;
Server.start = (app) => {
    app.listen(Server.port, () => {
        console.log(`Server 4 listening on port ${Server.port}`);
    });
    return new Server();
};
Server.start(app_1.default);
//# sourceMappingURL=server.js.map