const Infor = require("../models/Infor");

const createInfor = (newInfor) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdInfor = await Infor.create(newInfor);
      if (createdInfor) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdInfor,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const editInfor = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategory = await Infor.findOne({
        _id: id,
      });

      if (!checkCategory) {
        resolve({
          status: "OK",
          message: "The category is not defined",
        });
      }

      const updatedInfor = await Infor.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedInfor,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Infor.findOne({
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

const getInfor = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Infor.find();
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

module.exports = {
  createInfor,
  editInfor,
  getDetail,
  getInfor,
};
