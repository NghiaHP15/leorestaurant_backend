const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");
const Staff = require("../models/Staff");
// const { generalAccessToken } = require('./JwtService');

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { username, email, password, permission } = newUser;
    try {
      const checkEmailUser = await User.findOne({
        email: email,
      });
      const checkUsername = await User.findOne({
        username: username,
      });
      if (checkEmailUser) {
        resolve({
          status: "OK",
          error: "email",
          message: "Email is already",
        });
      }
      if (checkUsername) {
        resolve({
          status: "OK",
          error: "username",
          message: "Username is already",
        });
      }
      const hash = bcrypt.hashSync(password, 10);
      const createdUser = await User.create({
        username,
        email,
        password: hash,
        permission,
      });
      if (createdUser) {
        resolve({
          status: "SUCCESS",
          message: "Success",
          data: createdUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { username, password } = userLogin;
    try {
      const checkUser = await User.findOne({
        username: username,
      });
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
      const comparePassword = bcrypt.compareSync(password, checkUser.password);
      if (!comparePassword) {
        resolve({
          status: "OK",
          message: "The password or user is incorrect",
        });
      }
      if (checkUser.status === true) {
        const access_token = await generalAccessToken({
          id: checkUser.id,
          isAdmin: checkUser.isAdmin,
        });

        const refresh_token = await generalRefreshToken({
          id: checkUser.id,
          isAdmin: checkUser.isAdmin,
        });

        resolve({
          status: "OK",
          message: "Success",
          access_token,
          refresh_token,
          data: {
            user: checkUser.username,
          },
        });
      } else {
        resolve({
          status: "OK",
          message: "The account is not active",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: id,
      });

      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }

      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      console.log("updatedUser", updatedUser);

      resolve({
        status: "OK",
        message: "Success",
        data: updatedUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: id,
      });

      console.log("checkUser", checkUser);

      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }

      await User.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete User success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deletesUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await User.deleteMany({ _id: { $in: listID } });

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

const getAllUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await User.find().populate("permission").sort({ createdAt: -1 });

      resolve({
        status: "OK",
        message: "Get all User success",
        data: allUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        _id: id,
      }).populate("permission");

      const staff = await Staff.findOne({
        account: user._id,
      }).populate("role");
      if (user === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: {
          staff: {
            name: staff.name,
            email: staff.email,
            image: staff.image,
            role_name: staff.role.name,
            role_description: staff.role.description,
            account: staff.account,
          },
          user: {
            username: user.username,
            permission: user.permission,
          },
        },
      });
    } catch (error) {
      reject(error);
    }
  });
};

const changePasswordUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { passwordCurent, passwordNew } = data;
      const checkUser = await User.findOne({
        _id: id,
      });
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
      const comparePassword = bcrypt.compareSync(
        passwordCurent,
        checkUser.password
      );
      console.log(comparePassword);
      if (!comparePassword) {
        resolve({
          status: "OK",
          error: "passwordCurent",
          message: "Mật khẩu không chính xác",
        });
      } else {
        const hash = bcrypt.hashSync(passwordNew, 10);
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { password: hash },
          { new: true }
        );
        resolve({
          status: "OK",
          message: "Success",
          data: updatedUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailUser,
  deletesUser,
  changePasswordUser,
};
