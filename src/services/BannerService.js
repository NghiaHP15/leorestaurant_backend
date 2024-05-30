const Banner = require("../models/Banner");

const createBanner = (newBanner) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdBanner = await Banner.create(newBanner);
      if (createdBanner) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdBanner,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateBanner = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await Banner.findOne({
        _id: id,
      });

      if (!checkCategory) {
        resolve({
          status: "OK",
          message: "The category is not defined",
        });
      }

      const updatedBanner = await Banner.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedBanner,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Banner.deleteMany({ _id: { $in: listID } });

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
      const all = await Banner.find().populate("categoryBanner");

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
      const result = await Banner.findOne({
        _id: id,
      });

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

const getAllSlider = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await Banner.find()
        .populate("categoryBanner")
        .sort({ createdAt: -1 })
        .limit(5);

      const data = all.filter(
        (item) => item.categoryBanner.name === "Slider" && item.show === true
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
  createBanner,
  updateBanner,
  deleteBanner,
  getAll,
  getDetail,
  getAllSlider,
};
