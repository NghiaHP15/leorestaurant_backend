const CategoryGallery = require("../models/CategoryGallery");

const createGallery = (newGallery) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdGallery = await CategoryGallery.create(newGallery);
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

const deleteGallery = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await CategoryGallery.deleteMany({ _id: { $in: listID } });

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
      const all = await CategoryGallery.find();

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

module.exports = {
  createGallery,
  deleteGallery,
  getAll,
};
