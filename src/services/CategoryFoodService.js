const CategoryFood = require("../models/CategoryFood");

const createCategoryFood = (newCategoryFood) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newCategoryFood;
    try {
      const checkCategory = await CategoryFood.findOne({
        name: name,
      });
      if (checkCategory != null) {
        resolve({
          status: "OK",
          error: "name",
          message: "Category is already",
        });
      }
      const createdCategoryFood = await CategoryFood.create(newCategoryFood);
      if (createdCategoryFood) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdCategoryFood,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateCategoryFood = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await CategoryFood.findOne({
        _id: id,
      });

      if (!checkCategory) {
        resolve({
          status: "OK",
          message: "The category is not defined",
        });
      }

      const updatedCategoryFood = await CategoryFood.findByIdAndUpdate(
        id,
        data,
        { new: true }
      );

      resolve({
        status: "OK",
        message: "Success",
        data: updatedCategoryFood,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCategoryFood = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await CategoryFood.deleteMany({ _id: { $in: listID } });

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
      const all = await CategoryFood.find();

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
  createCategoryFood,
  updateCategoryFood,
  deleteCategoryFood,
  getAll,
};
