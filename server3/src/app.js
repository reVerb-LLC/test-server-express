require("dotenv").config();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const express = require("express");

const { api } = require("./routes");
const { auth } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", api);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.status(200).json({ status: "Hi from server3 / " });
});
app.use(express.static(path.resolve(__dirname, "../../public")));

module.exports = app;
