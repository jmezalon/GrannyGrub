const express = require("express");
const router = express.Router();

const {
  getAllGrandmas,
  getOneGrandma,
  getDishesByGrandmaId,
  addGrandma
} = require("../db/queries/grandmaQueries.js");

router.get("/", getAllGrandmas);
router.get("/:grandma_id", getOneGrandma);
router.get("/:grandma_id/dishes", getDishesByGrandmaId);
router.post("/", addGrandma);

module.exports = router;
