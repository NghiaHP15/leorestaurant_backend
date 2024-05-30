const CategoryBannerService = require("../services/CategoryBannerService");

const createCategoryBanner = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The name is required",
      });
    }
    const response = await CategoryBannerService.createCategoryBanner(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateCategoryBanner = async (req, res) => {
  try {
    const categoryBannerId = req.params.id;
    const data = req.body;
    if (!categoryBannerId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Category food id is required",
      });
    }

    const response = await CategoryBannerService.updateCategoryBanner(
      categoryBannerId,
      data
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCategoryBanner = async (req, res) => {
  try {
    const response = await CategoryBannerService.deleteCategoryBanner(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CategoryBannerService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCategoryBanner,
  updateCategoryBanner,
  deleteCategoryBanner,
  getAll,
};
