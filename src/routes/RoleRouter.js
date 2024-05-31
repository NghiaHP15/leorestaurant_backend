const express = require("express");
const RoleController = require("../controllers/RoleController");

const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.get("/list", RoleController.listRole);

router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,RoleController.updateRole);

router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,RoleController.deleteRole);

router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,RoleController.createRole);

module.exports = router;
