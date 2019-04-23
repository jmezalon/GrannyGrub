const express = require("express");
const router = express.Router();

const {
  filterByTypeAndCuisine,
  filterByLabel,
  filterByCuisineMap
} = require("../db/queries/filterQueries.js");

router.post("/criteria", filterByTypeAndCuisine);
router.get("/map-cuisine/:id", filterByCuisineMap);
router.get("/label/:id", filterByLabel);

// router.post("/", postFavorite);
// router.delete("/:id", deleteFavorite);

module.exports = router;
