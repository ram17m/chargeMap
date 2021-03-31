"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stationSchema = new Schema({
  Station: {
    Title: {
      type: "String",
    },
    Town: {
      type: "String",
    },
    AddressLine1: {
      type: "String",
    },
    StateOrProvince: {
      type: "String",
    },
    Postcode: {
      type: "Date",
    },
    Location: {
      coordinates: {
        type: ["Number"],
      },
    },
  },
  Connections: {
    type: ["Mixed"],
  },
});

module.exports = mongoose.model("station", stationSchema);
