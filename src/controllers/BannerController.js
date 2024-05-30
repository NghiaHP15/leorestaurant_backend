const BannerService = require("../services/BannerService");

const createBanner = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(200).json({
        status: "ERR",
        message: "The image is required",
      });
    }
    const response = await BannerService.createBanner(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateBanner = async (req, res) => {
  try {
    const BannerId = req.params.id;
    const data = req.body;
    if (!BannerId) {
      return res.status(200).json({
        status: "ERR",
        message: "The banner id is required",
      });
    }

    const response = await BannerService.updateBanner(BannerId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const response = await BannerService.deleteBanner(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await BannerService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const BannerId = req.params.id;
    if (!BannerId) {
      return res.status(200).json({
        status: "ERR",
        message: "The banner id is required",
      });
    }
    const response = await BannerService.getDetail(BannerId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAllSlider = async (req, res) => {
  try {
    const response = await BannerService.getAllSlider();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createBanner,
  updateBanner,
  deleteBanner,
  getAll,
  getDetail,
  getAllSlider,
};
