const express = require('express');
const cors = require('cors');
const path = require('path');

const api = require('./routes/api');
const auth = require('./routes/auth');

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/api', api)
  .use('/auth', auth)
  .get("/", (req, res) => res.status(200).json({ status: "Hi from server2 / " }))
  .use(express.static(path.resolve(__dirname, "../public")));

module.exports = app;