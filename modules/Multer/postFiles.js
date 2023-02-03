const multer = require("multer");

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/images/posts");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

module.exports = imageStorage;
