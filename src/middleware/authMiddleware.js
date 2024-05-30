const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleWare = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The Authemtication",
        status: "Error",
      });
    }
    const { isAdmin } = user;
    if (isAdmin) {
      next();
    } else {
      return res.status(404).json({
        message: "The Authemtication",
        status: "Error",
      });
    }
  });
};
const authUserMiddleWare = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id;

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authemtication",
      });
    }
    const { id, isAdmin } = user;
    if (isAdmin === true || userId === id) {
      next();
    } else {
      return res.status(404).json({
        status: "ERR",
        message: "The authemtication",
      });
    }
  });
};

module.exports = {
  authMiddleWare,
  authUserMiddleWare,
};
