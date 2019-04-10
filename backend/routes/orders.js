const express = require("express");

const router = express.Router();

const { orderSummary } = require("../db/queries/ordersQueries");

router.get("/", orderSummary);
// router.get("/:dish_id", getSingleDish);
//router.get("/:userid", getDishesByGrandmaId);
//
// router.delete("/:id", deleteDish);

module.exports = router;
