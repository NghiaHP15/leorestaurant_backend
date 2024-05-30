const express = require("express");
const AreaController = require("../controllers/AreaController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", AreaController.createArea);

router.put("/update/:id", AreaController.updateArea);

router.get("/get-details/:id", AreaController.getDetail);

router.get("/get-all", AreaController.getAll);

router.get("/get-tabel", AreaController.getTable);

router.post("/delete", AreaController.deleteArea);

module.exports = router;
