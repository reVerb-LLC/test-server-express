const router = require("express").Router();
const user = require("../controller/user");

router.post("/login", user.login);
router.post("/signUp", user.signUp);

router.get("/", (req, res) =>
  res.status(200).json({ status: "Hi from server1 /api/ " })
);

module.exports = router;
