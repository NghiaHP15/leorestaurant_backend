const express = require("express");
const AreaController = require("../controllers/AreaController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) , AreaController.createArea);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,AreaController.updateArea);

// router.get("/get-details/:id", verifyToken, authUser, authPage(['Admin','Super']) ,AreaController.getDetail);

// router.get("/get-all", AreaController.getAll);

// router.get("/get-tabel", AreaController.getTable);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,AreaController.deleteArea);

router.post("/create", AreaController.createArea);

router.put("/update/:id", AreaController.updateArea);

router.get("/get-details/:id", AreaController.getDetail);

router.get("/get-all", AreaController.getAll);

router.get("/get-tabel", AreaController.getTable);

router.post("/delete", AreaController.deleteArea);

module.exports = router;
