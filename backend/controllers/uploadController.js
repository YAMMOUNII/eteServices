const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/images/tstt");
  },
  filename: (req, file, cb) => {
    const imagePath = req.body.imagePath;

    cb(null,imagePath);
  },
});

const uploadSlide = multer({ storage: storage });

module.exports = uploadSlide;