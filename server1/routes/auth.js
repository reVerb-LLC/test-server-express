const router = require("express").Router();
const auth = require("../controller/auth");

router.get("/verify", auth.verify);
router.get("/create", auth.create);

router.get("/", (req, res) =>
  res.status(200).json({ status: "Hi from server1 /auth/ " })
);

module.exports = router;
