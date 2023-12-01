const mongoose = require("mongoose");

const supplierbranchSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  branchNo: {
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

  deliverFee: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
exports.SupplierBranch = mongoose.model("SupplierBranch", supplierbranchSchema);
