const express = require("express");
const BlogController = require("../controllers/BlogController");

const router = express.Router();

router.post("/create", BlogController.createBlog);

router.put("/update/:id", BlogController.updateBlog);

router.get("/get-all", BlogController.getAll);

router.post("/delete", BlogController.deleteBlog);

router.get("/get-details/:id", BlogController.getDetail);

router.get("/get-all-blog", BlogController.getAllBlog);

router.get("/get-all-blog-popular", BlogController.getAllBlogPopular);

module.exports = router;
