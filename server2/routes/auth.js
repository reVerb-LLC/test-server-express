const express = require("express");
const router = express.Router();

router
  .get("/verify", verify)
  .post("/create", create)
  .get("/", (req, res) => res.status(200).json({ status: "Hi from server2 /auth/ " }));

function verify(req, res) {
  res.status(200).json({ status: "user verified" });
}

function create(req, res) {
  res.status(200).json({ status: "user created" });
}

module.exports = router;
