const express = require("express");
const SupplierController = require("../controllers/SupplierController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,SupplierController.createSupplier);

router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,SupplierController.updateSupplier);

router.get("/get-details/:id", SupplierController.getDetail);

router.get("/get-all", SupplierController.getAll);

router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,SupplierController.deleteSupplier);

module.exports = router;
