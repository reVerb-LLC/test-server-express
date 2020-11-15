const express = require("express");
const router = new express.Router();

const { authController } = require("../controllers");

router.get("/verify", authController.verify, (req, res) => {
  return res.status(200).json(res.locals.verified);
});

router.post("/create", authController.create, (req, res) => {
  return res.status(200).json(res.locals.created);
});

router.get("/", (req, res) =>
  res.status(200).json({ status: "Hi from server3 /auth/ " })
);

module.exports = router;
