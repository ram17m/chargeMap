"use strict";

const router = require("express").Router();
const stationSchema = require("../models/connectionModel");
const connectionSchema = require("../models/connectionModel");
const { response } = require("express");
router.get("/", async (req, res) => {
  try {
    const stations = await stationSchema.find().limit(10);
    res.json(stations);
  } catch (e) {}
});

router.get("/:id", async (req, res) => {
  try {
    const stations = await stationSchema.findById(req.params.id);
    res.json(stations);
  } catch (e) {
    res.json(e);
    console.log(message(e));
  }
});
router.post("/", async (req, res) => {
  try {
    const connectionList = [];
    const connections = req.body.Connections;

    for (const elements of connections) {
      const response = await connectionSchema.create(elements);
      if (response._id) {
        connectionList.push(response._id);
      }
    }
    if (connectionList.length > 0) {
      const station = req.body.Station;
      station.Connections = connectionList;
      const response = await stationSchema.create(station);
      res.json(response._id);
    }
  } catch (e) {
    res.json(e);
    console.log(e);
  }
});

router.put("/", async (req, res) => {
  try {
    console.log(req.body.Station._id);
    const update = await stationSchema.updateOne(
      { _id: req.body.Station._id },
      req.body
    );
    res.send(update);
  } catch (e) {
    res.json(e);
  }
});

router.delete("/", async (req, res) => {
  try {
    console.log(req.body._id);
    const deleteStation = await stationSchema.deleteOne({
      _id: req.body._id,
    });
    res.send(deleteStation);
  } catch (e) {
    res.json(e);
  }
});
module.exports = router;
