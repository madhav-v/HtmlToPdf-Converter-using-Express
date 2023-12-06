const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDirectory = "./public/uploads";

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [".html"];
  const extname = path.extname(file.originalname).toLowerCase();
  if (allowedFileTypes.includes(extname)) {
    return cb(null, true);
  } else {
    return cb(new Error("Invalid file type. Only HTML files are allowed."));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
