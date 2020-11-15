"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
class Server {
}
Server.port = 3004;
Server.start = (app) => {
    app.listen(Server.port, () => {
        console.log(`Server 4 listening on port ${Server.port}`);
    });
    return new Server();
};
Server.start(api_1.default);
//# sourceMappingURL=server.js.map