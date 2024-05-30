const CategoryIngredient = require("../models/CategoryIngredient");

const createCategoryIngredient = (newCategoryIngredient) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newCategoryIngredient;
    try {
      const checkCategory = await CategoryIngredient.findOne({
        name: name,
      });
      if (checkCategory) {
        resolve({
          status: "OK",
          message: "Category is already",
        });
      }
      const createdCategoryIngredient = await CategoryIngredient.create(
        newCategoryIngredient
      );
      if (createdCategoryIngredient) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdCategoryIngredient,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateCategoryIngredient = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await CategoryIngredient.findOne({
        _id: id,
      });

      if (checkCategory === null) {
        resolve({
          status: "OK",
          message: "The category is not defined",
        });
      }

      const updatedCategoryIngredient =
        await CategoryIngredient.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedCategoryIngredient,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCategoryIngredient = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await CategoryIngredient.deleteMany({
        _id: { $in: listID },
      });

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
      const result = await CategoryIngredient.find();

      resolve({
        status: "OK",
        message: "Get all success",
        data: result,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createCategoryIngredient,
  updateCategoryIngredient,
  deleteCategoryIngredient,
  getAll,
};
