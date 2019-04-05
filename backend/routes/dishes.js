const express = require('express');

const router = express.Router();

const {
  getAllDishesByGrandma,
  getAllDishesByCuisine,
  AddNewDish,
} = require('../db/queries/dishQueries');

router.get('/grandma/:id', getAllDishesByGrandma);
router.get('/cuisine/id', getAllDishesByCuisine);
router.post('/new', AddNewDish);
// router.put("/:id", editUser);
// router.delete("/:id", deleteDish;

module.exports = router;
