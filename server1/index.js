require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes")(app);

app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(PORT, () => console.log(`Server 1 listening on port ${PORT}`));
