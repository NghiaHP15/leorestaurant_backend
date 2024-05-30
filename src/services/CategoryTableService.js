const CategoryTable = require("../models/CategoryTable");

const createCategoryTable = (newTable) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newTable;
    try {
      const checkCategoryTable = await CategoryTable.findOne({
        name: name,
      });
      if (checkCategoryTable) {
        resolve({
          status: "OK",
          message: "Bàn sớm tồn tại",
        });
      }
      const result = await CategoryTable.create(newTable);
      if (result) {
        resolve({
          status: "OK",
          message: "Success",
          data: result,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateCategoryTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCategoryTable = await CategoryTable.findOne({
        _id: id,
      });

      if (checkCategoryTable === null) {
        resolve({
          status: "OK",
          message: "The Table is not defined",
        });
      }

      const updatedCategoryTable = await CategoryTable.findByIdAndUpdate(
        id,
        data,
        {
          new: true,
        }
      );

      resolve({
        status: "OK",
        message: "Success",
        data: updatedCategoryTable,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Categorytable = await CategoryTable.findOne({
        _id: id,
      });

      if (table === null) {
        resolve({
          status: "OK",
          message: "The table is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: Categorytable,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCategoryTable = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await CategoryTable.deleteMany({ _id: { $in: listID } });

      resolve({
        status: "OK",
        message: "The Supplier is not defined",
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
      const result = await CategoryTable.find();

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
  createCategoryTable,
  updateCategoryTable,
  getDetail,
  deleteCategoryTable,
  getAll,
};
