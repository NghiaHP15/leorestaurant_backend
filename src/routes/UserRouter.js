const express = require("express");

const router = express.Router();

const UserController = require("../controllers/UserController");
const {
  authMiddleWare,
  authUserMiddleWare,
} = require("../middleware/authMiddleware");

router.post("/sign-up", UserController.createUser);

router.post("/create", UserController.createUser);

router.post("/login", UserController.loginUser);

router.post("/log-out", UserController.logOutUser);

router.put("/update/:id", UserController.updateUser);

router.put("/change-password/:id", UserController.changePasswordUser);

router.delete("/delete-user/:id", authMiddleWare, UserController.deleteUser);

router.post("/delete", UserController.deletesUser);

router.get("/get-all", UserController.getAllUser);

router.get(
  "/get-detail-user/:id",
  // authUserMiddleWare,
  UserController.getDetailUser
);

router.post("/refresh-token", UserController.refreshToken);

module.exports = router;
