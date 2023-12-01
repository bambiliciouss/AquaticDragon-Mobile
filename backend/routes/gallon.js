const { Gallon } = require("../models/gallon");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads/gallons");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.post(
  "/registergallons",
  uploadOptions.single("image"),
  async (req, res) => {
    const file = req.file;
    if (!file) return res.status(400).send("No image in the request");

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get(
      "host"
    )}/public/uploads/gallons/`;

    let gallon = new Gallon({
      type: req.body.type,
      gallonAge: req.body.gallonAge,
      user: req.body.user,
      image: `${basePath}${fileName}`,
    });
    gallon = await gallon.save();

    if (!gallon) {
      console.log("error");
      return res.status(400).send("the user cannot be created!");
    }

    res.send(gallon);
  }
);

router.get(`/:id`, async (req, res) => {
  console.log(req.params.id);
  const productList = await Gallon.find({ user: req.params.id });

  console.log(productList);

  // if (!productList) {
  //   return res.status(500).send("login first");
  // }
  res.send(productList);
});

module.exports = router;
