const express = require("express");
const TableController = require("../controllers/TableController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");
const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,TableController.createTable);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,TableController.updateTable);

// router.get("/get-details/:id", TableController.getDetail);

// router.get("/get-all", TableController.getAll);

// router.get("/get-all-filter", TableController.getAllFilter);

// router.get("/get-all-filter", TableController.getAllFilter);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,TableController.deleteTable);

// router.put("/:currentTableId/move/:newTableId", verifyToken, authUser, authPage(['Admin','Super']) ,TableController.moveTable);

router.post("/create", TableController.createTable);

router.put("/update/:id", TableController.updateTable);

router.get("/get-details/:id", TableController.getDetail);

router.get("/get-all", TableController.getAll);

router.get("/get-all-filter", TableController.getAllFilter);

router.get("/get-all-filter", TableController.getAllFilter);

router.post("/delete", TableController.deleteTable);

router.put("/:currentTableId/move/:newTableId", TableController.moveTable);

module.exports = router;
