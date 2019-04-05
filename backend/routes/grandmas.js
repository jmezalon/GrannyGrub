const express = require("express");
const router = express.Router();

const {
  getAllGrandmas,
  getOneGrandma,
  getDishesByGrandmaId
} = require("../db/queries/grandmaQueries.js");

router.get("/", getAllGrandmas);
router.get("/:grandma_id", getOneGrandma);
router.get("/:grandma_id/dishes", getDishesByGrandmaId);

module.exports = router;
