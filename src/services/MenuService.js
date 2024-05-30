const Menu = require("../models/Menu");

const createMenu = (newMenu) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newMenu;
    try {
      const checkMenu = await Menu.findOne({
        name: name,
      });
      if (checkMenu != null) {
        resolve({
          status: "OK",
          error: "name",
          message: "Thực đơn đã sớm tồn tại",
        });
      }
      const createdMenu = await Menu.create(newMenu);
      if (createdMenu) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdMenu,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateMenu = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkMenu = await Menu.findOne({
        _id: id,
      });

      if (checkMenu === null) {
        resolve({
          status: "OK",
          message: "The Menu is not defined",
        });
      }

      const updatedMenu = await Menu.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedMenu,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const menu = await Menu.findOne({
        _id: id,
      }).populate("item");

      if (!menu) {
        resolve({
          status: "OK",
          message: "The Menu is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: menu,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteMenu = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Menu.deleteMany({ _id: { $in: listID } });

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
      const result = await Menu.find().populate("item");

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
  createMenu,
  updateMenu,
  getDetail,
  deleteMenu,
  getAll,
};
