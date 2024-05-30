const Gallery = require("../models/Gallery");

const createGallery = (newGallery) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdGallery = await Gallery.create(newGallery);
      if (createdGallery) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdGallery,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateGallery = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await Gallery.findOne({
        _id: id,
      });

      if (!checkCategory) {
        resolve({
          status: "OK",
          message: "The category is not defined",
        });
      }

      const updatedGallery = await Gallery.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedGallery,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteGallery = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Gallery.deleteMany({ _id: { $in: listID } });

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
      const all = await Gallery.find().populate("categoryGallery");

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
      const result = await Gallery.findOne({
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

const getAllGallery = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await Gallery.find()
        .populate("categoryGallery")
        .sort({ createdAt: -1 })
        .limit(16);

      const data = all.filter(
        (item) => item.categoryGallery.name === "Gallery" && item.show === true
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

const getAllSocalMedia = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await Gallery.find()
        .populate("categoryGallery")
        .sort({ createdAt: -1 })
        .limit(12);

      const data = all.filter(
        (item) =>
          item.categoryGallery.name === "Socal Media" && item.show === true
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
  createGallery,
  updateGallery,
  deleteGallery,
  getAll,
  getDetail,
  getAllGallery,
  getAllSocalMedia,
};
