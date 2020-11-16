"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
exports.auth = (router) => {
    return (router.get("/", (req, res) => {
        res.status(200).json({ status: "Hi from server4 /auth " });
    }),
        router.get("/verify", (req, res) => {
            res.status(200).json({ status: "API OK" });
        }),
        router.get("/create", (req, res) => {
            res.status(200).json({ status: "API OK" });
        }));
};
exports.default = exports.auth;
//# sourceMappingURL=auth.js.map