const { SupplierBranch } = require("../models/supplierbranch");
const express = require("express");
const router = express.Router();

router.post("/registersupplierbranch", async (req, res) => {
  console.log("Received Request Body:", req.body);
  let supplierBranch = new SupplierBranch({
    user: req.body.user,
    branchNo: req.body.branchNo,
    streetName: req.body.streetName,
    purokNum: req.body.purokNum,
    barangay: req.body.barangay,
    city: req.body.city,
    deliverFee: req.body.deliverFee,
  });
  supplierBranch = await supplierBranch.save();

  if (!supplierBranch) {
    console.log("error");
    return res.status(500).send("the supplier branch cannot be created!");
  }

  res.send(supplierBranch);
});

router.get(`/`, async (req, res) => {
  const supplierBranchList = await SupplierBranch.find();

  if (!supplierBranchList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(supplierBranchList);
});

router.get(`/:id`, async (req, res) => {
  console.log(req.params.id);
  const supplierBranchList = await SupplierBranch.find({ user: req.params.id });

  console.log(supplierBranchList);

  // if (!productList) {
  //   return res.status(500).send("login first");
  // }
  res.send(supplierBranchList);
});

module.exports = router;
