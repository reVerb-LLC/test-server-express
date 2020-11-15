const express = require("express");
const router = new express.Router();

const { apiController } = require("../controllers");


router.get("/login", apiController.login, (req, res) => {
  return res.status(200).json(res.locals.loggedIn);
});

router.post("/signup", apiController.signup, (req, res) => {
  res.status(200).send(res.locals.signedUp);
});

router.get("/", (req, res) =>
  res.status(200).json({ status: "Hi from server3 /api/ " })
);

module.exports = router;
