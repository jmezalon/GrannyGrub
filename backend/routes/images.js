const express = require("express");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/images/",
  filename: (req, file, cb) => {
    let name =
      file.fieldname + "-" + Date.now() + "." + file.originalname.split(".")[1];
    cb(null, name);
  }
});

const upload = multer({ storage: storage });

router.post("/", upload.single("img"), (req, res, next) => {
  console.log(req.file, "req.file");
  res.json({ message: "success", url: `/images/${req.file.filename}` });
});

module.exports = router;
