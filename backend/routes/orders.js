const express = require("express");
const router = express.Router();

const {
  postNewOrder,
  deleteOrder,
  orderSummary,
  getAllOrderForSingleUser,
  allOrdersForGrandma
} = require("../db/queries/orderQueries.js");

router.post("/new", postNewOrder);
router.get("/ordersummary", orderSummary);
router.get("/user/:user_id", getAllOrderForSingleUser);
router.get("/grandma/:grandma_id", allOrdersForGrandma);
router.delete("/:id", deleteOrder);

module.exports = router;
