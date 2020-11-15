const express = require("express");
const router = express.Router();

router
  .post("/login", login)
  .post("/signup", signUp)
  .get("/", (req, res) => res.status(200).json({ status: "Hi from server2 /api/ " }));

function login(req, res) {
  res.status(200).json({ status: "user logged in" });
}

function signUp(req, res) {
  res.status(200).json({ status: "user signed up" });
}

module.exports = router;
