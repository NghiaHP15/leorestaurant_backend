const express = require("express");
const PermissionController = require("../controllers/PermissionController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post('/create',verifyToken, authUser, authPage(['Admin','Super']) ,PermissionController.createPermission)

// router.put('/update/:id', verifyToken, authUser, authPage(['Admin','Super']) , PermissionController.updatePermission)

// router.get('/get-details/:id', PermissionController.getDetail)

// router.get('/get-all', PermissionController.getAll)

// router.delete('/delete/:id',verifyToken, authUser, authPage(['Admin','Super']) , PermissionController.deletePermission)

router.post("/create", PermissionController.createPermission);

router.put("/update/:id", PermissionController.updatePermission);

router.get("/get-details/:id", PermissionController.getDetail);

router.get("/get-all", PermissionController.getAll);

router.delete("/delete/:id", PermissionController.deletePermission);

module.exports = router;
