const express = require("express");
const PermissionController = require('../controllers/PermissionController')

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/create',PermissionController.createPermission)

router.put('/update/:id', authMiddleWare, PermissionController.updatePermission)

router.get('/get-details/:id', PermissionController.getDetail)

router.get('/get-all', PermissionController.getAll)

router.delete('/delete/:id',authMiddleWare, PermissionController.deletePermission)

module.exports = router;