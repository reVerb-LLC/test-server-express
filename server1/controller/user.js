module.exports = {
  login: (req, res) => {
    res.status(200).json({ status: "user logged in" });
  },
  signUp: (req, res) => {
    res.status(200).json({ status: "user signed up" });
  },
};
