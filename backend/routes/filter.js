const express = require("express");
const router = express.Router();

const {
  filterByCuisine,
  filterByType,
  filterByLabel
} = require("../db/queries/filterQueries.js");

router.get("/cuisine/:id", filterByCuisine);
router.get("/type/:id", filterByType);
router.get("/labels/:id", filterByLabel);

// router.post("/", postFavorite);
// router.delete("/:id", deleteFavorite);

module.exports = router;
