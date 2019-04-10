const express = require("express");
const router = express.Router();

const { postNewOrder, deleteOrder } = require("../db/queries/orderQueries.js");

router.post("/new", postNewOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
