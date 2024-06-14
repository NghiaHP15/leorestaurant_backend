const Permission = require("../models/Permission");

const createPermission = (newPermission) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newPermission;
    try {
      const checkPermission = await Permission.findOne({
        name: name,
      });
      if (checkPermission != null) {
        resolve({
          status: "OK",
          message: "Permission is already",
        });
      }
      const createdPermission = await Permission.create(newPermission);
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

const updatePermission = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(1);
      const checkPermission = await Permission.findOne({
        _id: id,
      });

      if (checkPermission === null) {
        resolve({
          status: "OK",
          message: "The Permission is not defined",
        });
      }

      const updatedPermission = await Permission.findByIdAndUpdate(id, data, {
        new: true,
      });

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
      const permission = await Permission.findOne({
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

const deletePermission = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkPermission = await Permission.findOne({
        _id: id,
      });

      if (checkPermission === null) {
        resolve({
          status: "OK",
          message: "The Permission is not defined",
        });
      }

      await Permission.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete Permission success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAll = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const total = await Permission.count();
      if (filter) {
        const label = filter[0];
        const allObjectFilter = await Permission.find({
          [label]: { $regex: filter[1] },
        })
          .limit(limit)
          .skip(page * limit);
        resolve({
          status: "OK",
          message: "Get all success",
          data: allObjectFilter,
          total: total,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(total / limit),
        });
      }
      if (sort) {
        const objectSort = {};
        objectSort[sort[1]] = sort[0];
        const allSort = await Permission.find()
          .limit(limit)
          .skip(page * limit)
          .sort({ objectSort });
        resolve({
          status: "OK",
          message: "Get all success",
          data: allSort,
          total: total,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(total / limit),
        });
      }
      const all = await Permission.find()
        .limit(limit)
        .skip(page * limit);

      resolve({
        status: "OK",
        message: "Get all success",
        data: all,
        total: total,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(total / limit),
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createPermission,
  updatePermission,
  getDetail,
  deletePermission,
  getAll,
};
