require("dotenv").config();

const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
