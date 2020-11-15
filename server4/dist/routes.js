"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = (router) => {
    return router.get("/health", (req, res) => {
        res.json({ status: "API OK" });
    });
};
exports.default = exports.routes;
//# sourceMappingURL=routes.js.map