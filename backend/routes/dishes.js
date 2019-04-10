const express = require("express");

const router = express.Router();

const {
  addNewDish,
  deleteDish,
  getSingleDish,
  fixDish
} = require("../db/queries/dishQueries");

router.post("/new", addNewDish);
router.patch("/update/:id", fixDish);
router.get("/:dish_id", getSingleDish);

//router.get("/:userid", getDishesByGrandmaId);

router.delete("/:id", deleteDish);

module.exports = router;
