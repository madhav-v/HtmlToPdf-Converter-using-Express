const router = require("express").Router();
const { UploadFile } = require("../controller/uploadfile.controller");
const upload = require("../middleware/multer.middleware");

const uploadPath = (req, res, next) => {
  req.uploadPath = "./public/files/";
  next();
};
router.post("/", uploadPath, upload.single("html"), UploadFile);

module.exports = router;
