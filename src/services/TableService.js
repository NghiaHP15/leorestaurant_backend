const Area = require("../models/Area");
const Table = require("../models/Table");

const createTable = (newTable) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newTable;
    try {
      const checkTable = await Table.findOne({
        name: name,
      });
      if (checkTable) {
        resolve({
          status: "OK",
          message: "Bàn sớm tồn tại",
        });
      }
      const createdTable = await Table.create(newTable);
      if (createdTable) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdTable,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkTable = await Table.findOne({
        _id: id,
      }).populate("categoryTable");

      if (checkTable === null) {
        resolve({
          status: "OK",
          message: "The Table is not defined",
        });
      }

      const updatedTable = await Table.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedTable,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const table = await Table.findOne({
        _id: id,
      }).populate("categoryTable");

      if (table === null) {
        resolve({
          status: "OK",
          message: "The table is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: table,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTable = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Table.deleteMany({ _id: { $in: listID } });

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
      const result = await Table.find().populate("categoryTable");

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

const getAllFilter = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = await Area.find();
      const data = check.flatMap((item) =>
        item.table.map((objId) => objId.toString())
      );
      const table = await Table.find().populate("categoryTable");
      const newData = table.filter(
        (item) => !data.includes(item._id.toString())
      );

      resolve({
        status: "OK",
        message: "Get all success",
        data: newData,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const moveTable = (currentId, newId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const currentTable = await Table.findById(currentId);
      const newTable = await Table.findById(newId);
      if (!currentTable || !newTable) {
        resolve({
          status: "OK",
          message: "Bàn không tồn tại",
        });
      }
      // currentTable.status = false;
      await currentTable.save();

      // newTable.status = true;
      await newTable.save();

      resolve({
        status: "OK",
        message: "Chuyển bàn thành công",
        data: newTable,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createTable,
  updateTable,
  getDetail,
  deleteTable,
  getAll,
  getAllFilter,
  moveTable,
};
