const InforService = require("../services/InforService");

const createInfor = async (req, res) => {
  try {
    const resultInfor = await InforService.createInfor(req.body);
    return res.status(200).json(resultInfor);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const InforID = req.params.id;
    if (!InforID) {
      return res.status(200).json({
        status: "ERR",
        message: "The InforID is required",
      });
    }
    const resultInfor = await InforService.getDetail(InforID);
    return res.status(200).json(resultInfor);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const editInfor = async (req, res) => {
  try {
    const InforID = req.params.id;
    const data = req.body;
    if (!InforID) {
      return res.status(200).json({
        status: "ERR",
        message: "The InforID is required",
      });
    }
    const resultInfor = await InforService.editInfor(InforID, data);
    return res.status(200).json(resultInfor);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getInfor = async (req, res) => {
  try {
    const resultInfor = await InforService.getInfor();
    return res.status(200).json(resultInfor);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createInfor,
  getDetail,
  editInfor,
  getInfor,
};
