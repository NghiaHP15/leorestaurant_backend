const PermissionFunction = require("../models/PermissionFunction");

const createPermissionFunction = (newPermissionFunction) => {
  return new Promise(async (resolve, reject) => {
    const { name, note } = newPermissionFunction;
    try {
      const checkPermission = await PermissionFunction.findOne({
        name: name,
      });
      if (checkPermission != null) {
        resolve({
          status: "OK",
          message: "Permission is already",
        });
      }
      const createdPermission = await PermissionFunction.create({
        name,
        note,
      });
      if (createdPermission) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdPermission,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updatePermissionFunction = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkPermission = await PermissionFunction.findOne({
        _id: id,
      });

      if (checkPermission === null) {
        resolve({
          status: "OK",
          message: "The Permission is not defined",
        });
      }

      const updatedPermission = await PermissionFunction.findByIdAndUpdate(
        id,
        data,
        { new: true }
      );

      resolve({
        status: "OK",
        message: "Success",
        data: updatedPermission,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const permission = await PermissionFunction.findOne({
        _id: id,
      });

      if (permission === null) {
        resolve({
          status: "OK",
          message: "The permission is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: permission,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deletePermissionFunction = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkPermission = await PermissionFunction.findOne({
        _id: id,
      });

      if (checkPermission === null) {
        resolve({
          status: "OK",
          message: "The Permission is not defined",
        });
      }

      await PermissionFunction.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete Permission success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await PermissionFunction.find();
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
  createPermissionFunction,
  updatePermissionFunction,
  getDetail,
  deletePermissionFunction,
  getAll,
};
