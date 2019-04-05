const express = require('express');

const router = express.Router();

const {
  getAllDishesByCuisine,
  AddNewDish,
  deleteDish,
} = require('../db/queries/dishQueries');

router.get('/cuisine/id', getAllDishesByCuisine);
router.post('/new', AddNewDish);
// router.put("/:id", editUser);
router.delete('/:id', deleteDish);

module.exports = router;
