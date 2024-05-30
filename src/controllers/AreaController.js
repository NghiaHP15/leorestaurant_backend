const AreaService = require("../services/AreaService");

const createArea = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await AreaService.createArea(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateArea = async (req, res) => {
  try {
    const areaId = req.params.id;
    const data = req.body;
    if (!areaId) {
      return res.status(200).json({
        status: "ERR",
        message: "The table Id is required",
      });
    }

    const response = await AreaService.updateArea(areaId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const areaId = req.params.id;

    if (!areaId) {
      return res.status(200).json({
        status: "ERR",
        message: "The table Id is required",
      });
    }

    const response = await AreaService.getDetail(areaId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteArea = async (req, res) => {
  try {
    const response = await AreaService.deleteArea(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await AreaService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getTable = async (req, res) => {
  try {
    const response = await AreaService.getTable();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createArea,
  updateArea,
  getDetail,
  deleteArea,
  getAll,
  getTable,
};
