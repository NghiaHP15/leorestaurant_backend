const express = require("express");
const BlogController = require("../controllers/BlogController");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,BlogController.createBlog);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BlogController.updateBlog);

// router.get("/get-all", BlogController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,BlogController.deleteBlog);

// router.get("/get-details/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BlogController.getDetail);

// router.get("/get-all-blog", BlogController.getAllBlog);

// router.get("/get-all-blog-popular", BlogController.getAllBlogPopular);

router.post("/create", BlogController.createBlog);

router.put("/update/:id",BlogController.updateBlog);

router.get("/get-all", BlogController.getAll);

router.post("/delete",BlogController.deleteBlog);

router.get("/get-details/:id",BlogController.getDetail);

router.get("/get-all-blog", BlogController.getAllBlog);

router.get("/get-all-blog-popular", BlogController.getAllBlogPopular);

module.exports = router;
