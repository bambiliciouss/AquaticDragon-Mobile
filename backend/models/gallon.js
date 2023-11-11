const mongoose = require("mongoose");

const gallonSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  type: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
    required: true,
  },

  gallonAge: {
    type: String,
    required: true,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
exports.Gallon = mongoose.model("Gallon", gallonSchema);
