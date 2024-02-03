const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, "../../frontend/public/images");
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const newFileName = `${file.originalname.split(".").join(`_${timestamp}.`)}`;
    cb(null, newFileName);
  },
});

const uploadSlide = multer({ storage: storage });

module.exports = uploadSlide;
