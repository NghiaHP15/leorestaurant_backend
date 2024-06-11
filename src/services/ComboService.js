const Combo = require("../models/Combo");

const createCombo = (newCombo) => {
  return new Promise(async (resolve, reject) => {
    const { name, items, price, discount } = newCombo;
    try {
      const checkCombo = await Combo.findOne({
        name: name,
      });
      if (checkCombo != null) {
        resolve({
          status: "OK",
          message: "Combo is already",
        });
      }

      const createdCombo = await Combo.create(newCombo);
      if (createdCombo) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdCombo,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateCombo = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCombo = await Combo.findOne({
        _id: id,
      });

      if (checkCombo === null) {
        resolve({
          status: "OK",
          message: "The Combo is not defined",
        });
      }

      const updatedCombo = await Combo.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedCombo,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const combo = await Combo.findOne({
        _id: id,
      }).populate("item");
      if (combo === null) {
        resolve({
          status: "OK",
          message: "The combo is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: combo,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCombo = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Combo.deleteMany({ _id: { $in: listID } });

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
      const result = await Combo.find().sort({ createdAt: -1 }) ;

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
  createCombo,
  updateCombo,
  getDetail,
  deleteCombo,
  getAll,
};
