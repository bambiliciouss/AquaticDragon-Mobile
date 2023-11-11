const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  houseNo: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  purokNum: {
    type: String,
    required: true,
  },
  barangay: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;

// {   "name": "",
//     "email": "",
//     "passwordHash": "password",
//     "phone": "0999992123",
//     "isAdmin": true,
//     "street": "champaca st",
//     "apartment": "champaca apartment",
//     "zip": "1630",
//     "city": "Taguig city",
//     "country": "Philippines",
// }
