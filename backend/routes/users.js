const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUser,
  recordNaturalCauses,
  createNewUser,
  logUserOut,
  logUserIn,
  isLoggedIn
} = require("../db/queries/UserQueries.js");

const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json({
      status: "success",
      users,
      message: "all users"
    });
  } catch (e) {
    next(e);
  }
});

router.get("/:user_id", getOneUser);
// router.get("/:user_id/dishes", getDishesByUSerId);
router.post("/new", createNewUser);

router.post("/login", passport.authenticate("local", {}), logUserIn);
router.post("/logout", loginRequired, logUserOut);
router.post("/isLoggedIn", isLoggedIn);
router.delete("/:user_id", recordNaturalCauses);

module.exports = router;
