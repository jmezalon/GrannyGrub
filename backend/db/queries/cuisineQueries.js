const db = require("../connection");

const getAllCuisines = (req, res, next) => {
  db.any("SELECT * FROM cuisines")
    .then(cuisines => {
      res.status(200).json({
        status: "success",
        cuisines: cuisines,
        message: "all cuisines"
      });
    })
    .catch(err => next(err));
};
