const express = require("express");
const RoleController = require("../controllers/RoleController");

const { authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.get("/list", RoleController.listRole);

router.put("/update/:id", RoleController.updateRole);

router.post("/delete", RoleController.deleteRole);

router.post("/create", RoleController.createRole);

module.exports = router;
