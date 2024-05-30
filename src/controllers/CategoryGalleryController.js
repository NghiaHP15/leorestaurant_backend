const CategoryGalleryService = require("../services/CategoryGalleryService");

const createCategoryGallery = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The name is required",
      });
    }
    const response = await CategoryGalleryService.createGallery(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCategoryGallery = async (req, res) => {
  try {
    const response = await CategoryGalleryService.deleteGallery(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CategoryGalleryService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCategoryGallery,
  deleteCategoryGallery,
  getAll,
};
