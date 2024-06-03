const express = require("express");
const BillController = require("../controllers/BillController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,BillController.createBill);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BillController.updateBill);

// router.get("/get-details/:id",verifyToken, authUser, authPage(['Admin','Super']) , BillController.getDetail);

// router.get("/get-all", BillController.getAll);

// router.delete("/delete/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BillController.deleteBill);

router.post("/create", BillController.createBill);

router.put("/update/:id", BillController.updateBill);

router.get("/get-details/:id", BillController.getDetail);

router.get("/get-all", BillController.getAll);

router.delete("/delete/:id", BillController.deleteBill);

module.exports = router;
