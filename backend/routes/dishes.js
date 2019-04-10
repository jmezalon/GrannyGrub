const express = require("express");

const router = express.Router();

const {
  addNewDish,
  deleteDish,
  getDishesByGrandmaId
} = require("../db/queries/dishQueries");

router.post("/new", addNewDish);
router.get("/user/:userid", getDishesByGrandmaId);
router.delete("/:id", deleteDish);

module.exports = router;
