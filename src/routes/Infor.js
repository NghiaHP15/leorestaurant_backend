const express = require("express");
const InforController = require("../controllers/InforController");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,InforController.createInfor);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,InforController.editInfor);

// router.get("/get-details/:id", InforController.getDetail);

// router.get("/get-infor", InforController.getInfor);

router.post("/create",InforController.createInfor);

router.put("/update/:id",InforController.editInfor);

router.get("/get-details/:id", InforController.getDetail);

router.get("/get-infor", InforController.getInfor);

module.exports = router;
