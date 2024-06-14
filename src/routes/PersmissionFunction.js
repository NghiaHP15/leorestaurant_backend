const express = require("express");
const PermissionFunctionController = require("../controllers/PermissionFunctionController");

const router = express.Router();

router.post("/create", PermissionFunctionController.createPermissionFunction);

router.put(
  "/update/:id",
  PermissionFunctionController.updatePermissionFunction
);

router.get("/get-details/:id", PermissionFunctionController.getDetail);

router.get("/get-all", PermissionFunctionController.getAll);

router.delete(
  "/delete/:id",
  PermissionFunctionController.deletePermissionFunction
);

module.exports = router;
