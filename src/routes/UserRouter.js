const express = require("express");

const router = express.Router();

const UserController = require("../controllers/UserController");
const {
  authMiddleWare,
  authUserMiddleWare,
} = require("../middleware/authMiddleware");

const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

router.post("/sign-up", UserController.createUser);

router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,UserController.createUser);

router.post("/login", UserController.loginUser);

router.post("/log-out", UserController.logOutUser);

router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,UserController.updateUser);

router.put("/change-password/:id", verifyToken, authUser, authPage(['Admin','Super']) ,UserController.changePasswordUser);

router.delete("/delete-user/:id", verifyToken, authUser, authPage(['Admin','Super']) , UserController.deleteUser);

router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) , UserController.deletesUser);

router.get("/get-all", UserController.getAllUser);

router.get(
  "/get-detail-user/:id",
  // authUserMiddleWare,
  UserController.getDetailUser
);

router.post("/refresh-token", UserController.refreshToken);

module.exports = router;
