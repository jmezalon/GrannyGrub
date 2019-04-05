const express = require("express");

const router = express.Router();

const {
  getAllDishesByGrandma,
  getAllDishesByCuisine
} = require("../db/queries/dishQueries");

router.get("/grandma/:id", getAllDishesByGrandma);
router.get("/cuisine/id", getAllDishesByCuisine);
// router.post("/new", createNewUser);
// router.put("/:id", editUser);
// router.delete("/:id", deleteDish;

module.exports = router;
