const GalleryService = require("../services/GalleryService");

const createGallery = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(200).json({
        status: "ERR",
        message: "The image is required",
      });
    }
    const response = await GalleryService.createGallery(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateGallery = async (req, res) => {
  try {
    const GalleryId = req.params.id;
    const data = req.body;
    if (!GalleryId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Gallery id is required",
      });
    }

    const response = await GalleryService.updateGallery(GalleryId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteGallery = async (req, res) => {
  try {
    const response = await GalleryService.deleteGallery(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await GalleryService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const GalleryId = req.params.id;
    if (!GalleryId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Gallery id is required",
      });
    }
    const response = await GalleryService.getDetail(GalleryId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAllGallery = async (req, res) => {
  try {
    const response = await GalleryService.getAllGallery();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAllSocalMedia = async (req, res) => {
  try {
    const response = await GalleryService.getAllSocalMedia();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createGallery,
  updateGallery,
  deleteGallery,
  getAll,
  getDetail,
  getAllGallery,
  getAllSocalMedia,
};
