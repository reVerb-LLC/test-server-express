const router = require("express").Router();
const user = require("../controller/user");

router.get("/login", user.login);
router.get("/signUp", user.signUp);

router.get("/", (req, res) =>
  res.status(200).json({ status: "Hi from server1 /api/ " })
);

module.exports = router;
