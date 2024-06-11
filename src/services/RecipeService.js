const { da } = require("date-fns/locale");
const Bill = require("../models/Bill");
const Recipe = require("../models/Recipe");

const createRecipe = (newRecipe) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newRecipe;
    try {
      const checkRecipe = await Recipe.findOne({
        name: name,
      });
      if (checkRecipe) {
        resolve({
          status: "OK",
          error: "name",
          message: "Recipe is already",
        });
      }
      const createdRecipe = await Recipe.create(newRecipe);
      if (createdRecipe) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdRecipe,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateRecipe = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkRecipe = await Recipe.findOne({
        _id: id,
      });

      if (checkRecipe === null) {
        resolve({
          status: "OK",
          message: "The Recipe is not defined",
        });
      }

      const updatedRecipe = await Recipe.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedRecipe,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const recipe = await Recipe.findOne({
        _id: id,
      });

      if (recipe === null) {
        resolve({
          status: "OK",
          message: "The Recipe is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: recipe,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteRecipe = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Recipe.deleteMany({ _id: { $in: listID } });

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
      const result = await Recipe.find()
        .populate("categoryFood")
        .populate("ingredient._id")
        .sort({ createdAt: -1 });
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

const pointRecipe = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.isPaid === true) {
        const recipe = await Recipe.find();
        const foods = data.booking.food;
        for (i of foods) {
          const data = recipe.find(
            (item) => item._id.toString() === i.item.toString()
          );
          data.point += i.amount;
          await Recipe.findOneAndUpdate(data._id, data, { new: true });
        }
      }
      resolve({
        status: "OK",
        message: "Get all success",
        data: "bill",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const bestNew = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Recipe.find().sort({ createdAt: -1 });

      const data = result.filter((item) => item.show === true);

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

const bestSale = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Recipe.find().sort({ point: -1 }).limit(16);

      const data = result.filter((item) => item.show === true);
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
  createRecipe,
  updateRecipe,
  getDetail,
  deleteRecipe,
  getAll,
  pointRecipe,
  bestNew,
  bestSale,
};
