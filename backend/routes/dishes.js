const express = require("express");

const router = express.Router();

const { addNewDish, deleteDish } = require("../db/queries/dishQueries");

router.post("/new", addNewDish);
router.delete("/:id", deleteDish);

module.exports = router;
