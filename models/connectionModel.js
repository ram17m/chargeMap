"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  Connections: {
    ConnectionTypeID: {
      type: "String",
    },
    CurrentTypeID: {
      type: "String",
    },
    LevelID: {
      type: "String",
    },
    Quantity: {
      type: "Number",
    },
  },
});

module.exports = mongoose.model("connection", connectionSchema);
