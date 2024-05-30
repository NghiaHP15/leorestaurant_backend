const express = require("express");
const SupplierController = require("../controllers/SupplierController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", SupplierController.createSupplier);

router.put("/update/:id", SupplierController.updateSupplier);

router.get("/get-details/:id", SupplierController.getDetail);

router.get("/get-all", SupplierController.getAll);

router.post("/delete", SupplierController.deleteSupplier);

module.exports = router;
