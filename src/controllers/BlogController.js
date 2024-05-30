const BlogService = require("../services/BlogService");

const createBlog = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await BlogService.createBlog(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const data = req.body;
    if (!blogId) {
      return res.status(200).json({
        status: "ERR",
        message: "Blog id is required",
      });
    }

    const response = await BlogService.updateBlog(blogId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const blogId = req.params.id;
    if (!blogId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Blog Id is required",
      });
    }
    const response = await BlogService.getDetail(blogId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const response = await BlogService.deleteBlog(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await BlogService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const response = await BlogService.getAllBlog();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const getAllBlogPopular = async (req, res) => {
  try {
    const response = await BlogService.getAllBlogPopular();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  getDetail,
  deleteBlog,
  getAll,
  getAllBlog,
  getAllBlogPopular,
};
