const Role = require("../models/Role");

const createRole = (newRole) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name } = newRole;
      const checkName = await Role.findOne({ name: name });
      if (checkName) {
        resolve({
          status: "OK",
          message: "Name is already",
        });
      }

      const createdRole = await Role.create(newRole);
      if (createdRole) {
        resolve({
          status: "OK",
          message: "Successs",
          data: createdRole,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const listRole = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const listRole = await Role.find();
      if (listRole) {
        resolve({
          status: "OK",
          message: "Successs",
          data: listRole,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateRole = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkRole = await Role.findOne({
        _id: id,
      });

      if (checkRole === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }

      const updatedRole = await Role.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedRole,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteRole = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);

      const result = await Role.deleteMany({ _id: { $in: listID } });

      console.log(result);

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

module.exports = {
  createRole,
  listRole,
  updateRole,
  deleteRole,
};
