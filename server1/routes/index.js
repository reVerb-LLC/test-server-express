module.exports = (app) => {
  app.use("/api", require("./api"));
  app.use("/auth", require("./auth"));
  app.get("/", (req, res) => res.status(200).json({ status: "Hi from server1 / " }));
};
