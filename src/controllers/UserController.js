const UserService = require("../services/UserService");
const { refreshTokenJwtService } = require("../services/JwtService");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const result = await UserService.loginUser(req.body);
    const { refresh_token, ...newReponse } = result;
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
      samesite: "strict",
    });
    return res.status(200).json({ ...newReponse, refresh_token });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const logOutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({
      status: "OK",
      message: "Logout successfully",
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const data = req.body;
    if (!userID) {
      return res.status(200).json({
        status: "ERR",
        message: "The userID is required",
      });
    }

    const response = await UserService.updateUser(userID, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    // const token = req.headers;
    if (!userID) {
      return res.status(200).json({
        status: "ERR",
        message: "The userID is required",
      });
    }

    const response = await UserService.deleteUser(userID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deletesUser = async (req, res) => {
  try {
    const response = await UserService.deletesUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const changePasswordUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const data = req.body;
    if (!userID) {
      return res.status(200).json({
        status: "ERR",
        message: "The ID is required",
      });
    }
    const response = await UserService.changePasswordUser(userID, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetailUser = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      return res.status(200).json({
        status: "ERR",
        message: "The userID is required",
      });
    }

    const response = await UserService.getDetailUser(userID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = req.headers.token.split(" ")[1];

    if (!token) {
      return res.status(200).json({
        status: "ERR",
        message: "The token is required",
      });
    }
    const result = await refreshTokenJwtService(token);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailUser,
  refreshToken,
  logOutUser,
  deletesUser,
  changePasswordUser,
};
