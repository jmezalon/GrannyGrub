const express = require("express");
const router = express.Router();

const {
  getAllGrandmas,
  getOneGrandma,
  getDishesByGrandmaId,
  createNewGrandma,
  logUserOut,
  logUserIn,
  isLoggedIn
} = require("../db/queries/grandmaQueries.js");

const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.post("/login", passport.authenticate("local", {}), logUserIn);
router.post("/logout", loginRequired, logUserOut);
router.get("/getuser", loginRequired, isLoggedIn);
router.get("/", getAllGrandmas);
router.get("/:grandma_id", getOneGrandma);
router.get("/:grandma_id/dishes", getDishesByGrandmaId);
router.post("/new", createNewGrandma);

module.exports = router;
