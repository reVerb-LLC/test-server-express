module.exports = {
    verify: (req, res) => {
      res.status(200).json({ status: "user verified" });
    },
    create: (req, res) => {
      res.status(200).json({ status: "user created" });
    },
  };
  