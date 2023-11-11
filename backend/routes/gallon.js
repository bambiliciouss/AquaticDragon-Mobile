const { Gallon } = require("../models/gallon");
const express = require("express");
const router = express.Router();

router.post("/registergallons", async (req, res) => {
  let gallon = new Gallon({
    type: req.body.type,
    gallonAge: req.body.gallonAge,
    user: req.body.user,
  });
  gallon = await gallon.save();

  if (!gallon) return res.status(400).send("the user cannot be created!");

  res.send(gallon);
});

module.exports = router;
