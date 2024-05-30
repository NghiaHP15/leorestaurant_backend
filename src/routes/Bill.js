const express = require("express");
const BillController = require("../controllers/BillController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", BillController.createBill);

router.put("/update/:id", BillController.updateBill);

router.get("/get-details/:id", BillController.getDetail);

router.get("/get-all", BillController.getAll);

router.delete("/delete/:id", BillController.deleteBill);

module.exports = router;
