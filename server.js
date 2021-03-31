"use strict";
require("dotenv").config();

const express = require("express");
const { port } = require("./db");
const app = express();
const db = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/stations", require("./routes/route"));
app.get("/", (req, res) => {
  res.send("hello to chargemap");
});

db.on("connected", () => {
  app.listen(3000, () => {
    console.log(`database connecting to port ${port}`);
  });
});
