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

  // gallonImage: {
  //   public_id: {
  //     type: String,

  //     required: true,
  //   },

  //   url: {
  //     type: String,

  //     required: true,
  //   },
  // },

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
exports.Gallon = mongoose.model('Gallon', gallonSchema);
