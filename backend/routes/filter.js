const express = require("express");
const router = express.Router();

const {
  filterByCuisine,
  filterByLabel
} = require("../db/queries/filterQueries.js");

router.get("/cuisine/:id", filterByCuisine);
router.get("/label/:id", filterByLabel);

// router.post("/", postFavorite);
// router.delete("/:id", deleteFavorite);

module.exports = router;
