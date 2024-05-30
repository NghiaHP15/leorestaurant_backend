const Staff = require("../models/Staff");

const createStaff = (newStaff) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, identification, account } = newStaff;
      const checkEmail = await Staff.findOne({
        email: email,
      });
      const checkIdentification = await Staff.findOne({
        identification: identification,
      });
      const checkAccount = await Staff.findOne({
        account: account,
      });
      if (checkEmail) {
        resolve({
          status: "OK",
          error: "email",
          message: "Email is already",
        });
      }
      if (checkIdentification) {
        resolve({
          status: "OK",
          error: "identification",
          message: "Identification is already",
        });
      }
      if (checkAccount) {
        resolve({
          status: "OK",
          error: "account",
          message: "Account is already",
        });
      }
      const createdStaff = await Staff.create(newStaff);
      if (createdStaff) {
        resolve({
          status: "OK",
          message: "Successs",
          data: createdStaff,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const listStaff = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const listStaff = await Staff.find();
      if (listStaff) {
        resolve({
          status: "OK",
          message: "Successs",
          data: listStaff,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteStaff = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Staff.deleteMany({ _id: { $in: listID } });

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

const detailStaff = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = await Staff.findOne({
        _id: id,
      })
        .populate("account")
        .populate("role");

      if (staff === null) {
        resolve({
          status: "OK",
          message: "The staff is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: staff,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const editStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = await Staff.findOne({
        _id: id,
      });

      const { account } = data;

      const checkAccount = await Staff.findOne({
        account: account,
      });

      if (staff === null) {
        resolve({
          status: "OK",
          message: "The staff is not defined",
        });
      }

      const updatedUser = await Staff.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Succees",
        data: updatedUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const listStaffChef = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const listStaff = await Staff.find().populate("role").limit(5);

      const data = listStaff.filter((item) => item.role.name === "Đầu bếp");

      if (listStaff) {
        resolve({
          status: "OK",
          message: "Successs",
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createStaff,
  listStaff,
  deleteStaff,
  detailStaff,
  editStaff,
  listStaffChef,
};
