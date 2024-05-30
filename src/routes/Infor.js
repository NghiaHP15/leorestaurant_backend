const express = require("express");
const InforController = require("../controllers/InforController");

const router = express.Router();

router.post("/create", InforController.createInfor);

router.put("/update/:id", InforController.editInfor);

router.get("/get-details/:id", InforController.getDetail);

router.get("/get-infor", InforController.getInfor);

module.exports = router;
