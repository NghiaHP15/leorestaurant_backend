const Ingredient = require("../models/Ingredient");
const { v4: uuidv4 } = require("uuid");

async function generateUniqueCode(length = 5) {
  let code = uuidv4().substring(0, length);
  while (true) {
    const existing = await Ingredient.findOne({ code: code });
    if (!existing) {
      break;
    }
    code = uuidv4().substring(0, length);
  }
  return code;
}

const createIngredient = (newIngredient) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newCode = await generateUniqueCode(5);
      const _newIngredient = { ...newIngredient };
      _newIngredient.code = `NL${newCode}`;
      const { name } = _newIngredient;
      console.log(1);

      const checkIngredient = await Ingredient.findOne({
        name: name,
      });
      if (checkIngredient) {
        resolve({
          status: "OK",
          error: "name",
          message: "Ingredient is already",
        });
      }
      const createdIngredient = await Ingredient.create(_newIngredient);
      if (createdIngredient) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdIngredient,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateIngredient = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkIngredient = await Ingredient.findOne({
        _id: id,
      });

      if (!checkIngredient) {
        resolve({
          status: "OK",
          message: "The Ingredient is not defined",
        });
      }

      const updatedIngredient = await Ingredient.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedIngredient,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ingredient = await Ingredient.findOne({
        _id: id,
      });

      if (!ingredient) {
        resolve({
          status: "OK",
          message: "The Ingredient is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: ingredient,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteIngredient = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Ingredient.deleteMany({ _id: { $in: listID } });

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
      const result = await Ingredient.find()
        .populate("category")
        .populate("supplier");

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
  createIngredient,
  updateIngredient,
  getDetail,
  deleteIngredient,
  getAll,
};
