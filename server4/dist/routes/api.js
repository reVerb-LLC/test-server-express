"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
exports.api = (router) => {
    return (router.get("/", (req, res) => {
        res.status(200).json({ status: "Hi from server4 /api " });
    }),
        router.get("/login", (req, res) => {
            res.status(200).json({ status: "API OK" });
        }),
        router.get("/signup", (req, res) => {
            res.status(200).json({ status: "API OK" });
        }));
};
exports.default = exports.api;
//# sourceMappingURL=api.js.map