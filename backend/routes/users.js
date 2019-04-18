const express = require("express");
const router = express.Router();

const {
  getDishesByGrandmaId,
  getAllUsers,
  getOneGrandmaInfo,
  recordNaturalCauses,
  createNewUser,
  fixGrandma,
  logoutUser,
  loginUser,
  getAllUsersListView,
  isLoggedIn
} = require("../db/queries/UserQueries.js");

const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.get("/", getAllUsers);

router.get("/listview", getAllUsersListView);

router.get("/isLoggedIn", isLoggedIn);

router.post("/new", createNewUser);

router.patch("/update/:id", fixGrandma);

router.post("/login", passport.authenticate("local", {}), loginUser);

router.post("/logout", loginRequired, logoutUser);

router.get("/grandma/:user_id", getOneGrandmaInfo);
// router.get("/:user_id/dishes", getDishesByUSerId);

router.get("/:id/dishes", getDishesByGrandmaId);

router.delete("/:user_id", recordNaturalCauses);

module.exports = router;
