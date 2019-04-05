const express = require("express");

const router = express.Router();

const {
  getAllCuisines,
  getAllDishesByCuisine,
  addNewCuisine,

  deleteCuisine
} = require("../db/queries/cuisineQueries");

router.get("/", getAllCuisines);
router.get("/:id/dishes", getAllDishesByCuisine);
router.post("/new", addNewCuisine);
router.delete("/:id", deleteCuisine);

module.exports = router;
