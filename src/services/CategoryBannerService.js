const CategoryBanner = require("../models/CategoryBanner");

const createCategoryBanner = (newCategoryBanner) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newCategoryBanner;
    try {
      const checkCategory = await CategoryBanner.findOne({
        name: name,
      });
      if (checkCategory != null) {
        resolve({
          status: "OK",
          error: "name",
          message: "Category is already",
        });
      }
      const createdCategoryBanner = await CategoryBanner.create(
        newCategoryBanner
      );
      if (createdCategoryBanner) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdCategoryBanner,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateCategoryBanner = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await CategoryBanner.findOne({
        _id: id,
      });

      if (!checkCategory) {
        resolve({
          status: "OK",
          message: "The category is not defined",
        });
      }

      const updatedCategoryBanner = await CategoryBanner.findByIdAndUpdate(
        id,
        data,
        { new: true }
      );

      resolve({
        status: "OK",
        message: "Success",
        data: updatedCategoryBanner,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCategoryBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await CategoryBanner.deleteMany({ _id: { $in: listID } });

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
      const all = await CategoryBanner.find();

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
  createCategoryBanner,
  updateCategoryBanner,
  deleteCategoryBanner,
  getAll,
};
