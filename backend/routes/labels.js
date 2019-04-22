const express = require("express");

const router = express.Router();

const {
  getAllLabels,
  addNewLabeledDish
} = require("../db/queries/labelsQueries");

router.get("/", getAllLabels);
router.post("/new", addNewLabeledDish);

// router.get("/:dish_id", getSingleDish);
//router.get("/:userid", getDishesByGrandmaId);
//
// router.delete("/:id", deleteDish);

module.exports = router;
