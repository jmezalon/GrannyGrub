const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUser,
  recordNaturalCauses,
  createNewUser,
  logoutUser,
  loginUser,
  isLoggedIn
} = require("../db/queries/UserQueries.js");

const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.get("/", getAllUsers);

router.get("/isLoggedIn", isLoggedIn);

router.post("/new", createNewUser);

router.post("/login", passport.authenticate("local", {}), loginUser);

router.post("/logout", loginRequired, logoutUser);
// router.post("/new", createNewUser);
// router.post("/logout", loginRequired, logUserOut);
// router.get("/isLoggedIn", isLoggedIn);
// router.post("/login", passport.authenticate("local", {}), logUserIn);
// router.get("/:user_id", getOneUser);
// router.get("/:user_id/dishes", getDishesByUSerId);

router.delete("/:user_id", recordNaturalCauses);

module.exports = router;
