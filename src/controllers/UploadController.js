const uploadImages = async (req, res) => {
  console.log(req.file);
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "ERR",
        message: "No file uploaded",
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Image uploaded successfully",
      data: {
        imagePath: req.file.path,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: "Internal server error",
    });
  }
};

const uploadArrayImages = async (req, res) => {
  try {
    console.log(req.files);
    if (!req.files) {
      return res.status(400).json({
        status: "ERR",
        message: "No file uploaded",
      });
    }
    const data = [];
    req.files.forEach((item) => {
      data.push({ path: item.path, filename: item.filename });
    });

    return res.status(200).json({
      status: "OK",
      message: "Image uploaded successfully",
      data: {
        imagesPath: data,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: "Internal server error",
    });
  }
};

module.exports = {
  uploadImages,
  uploadArrayImages,
};
