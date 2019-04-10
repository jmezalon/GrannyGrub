const express = require("express");

const router = express.Router();

const { getAllLabels } = require("../db/queries/labelsQueries");

router.get("/", getAllLabels);
// router.get("/:dish_id", getSingleDish);
//router.get("/:userid", getDishesByGrandmaId);
//
// router.delete("/:id", deleteDish);

module.exports = router;
