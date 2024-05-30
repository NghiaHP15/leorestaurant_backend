const Blog = require("../models/Blog");

const createBlog = (newBlog) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name } = newBlog;
      const checkBlog = await Blog.findOne({
        name: name,
      });
      if (checkBlog != null) {
        resolve({
          status: "OK",
          error: "name",
          message: "Blog đã sớm tồn tại",
        });
      }
      const createdBlog = await Blog.create(newBlog);
      if (createdBlog) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdBlog,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateBlog = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await Blog.findOne({
        _id: id,
      });

      if (!checkCategory) {
        resolve({
          status: "OK",
          message: "The blog is not defined",
        });
      }

      const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedBlog,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteBlog = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Blog.deleteMany({ _id: { $in: listID } });

      resolve({
        status: "OK",
        message: "Delete is successs",
        deletedCount: result.deletedCount,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await Blog.find().populate("customer");

      resolve({
        status: "OK",
        message: "Get all success",
        data: all,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Blog.findOne({
        _id: id,
      }).populate("customer");

      if (!result) {
        resolve({
          status: "OK",
          message: "The Ingredient is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: result,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllBlog = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await Blog.find()
        .populate("customer")
        .sort({ createdAt: -1 })
        .limit(5);

      const data = all.filter((item) => item.show === true);

      resolve({
        status: "OK",
        message: "Get all success",
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllBlogPopular = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await Blog.find().sort({ createdAt: -1 }).limit(5);

      const data = all.filter(
        (item) => item.show === true && item.popular === true
      );

      resolve({
        status: "OK",
        message: "Get all success",
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAll,
  getDetail,
  getAllBlog,
  getAllBlogPopular,
};
