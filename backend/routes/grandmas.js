// const express = require("express");
// const router = express.Router();
//
// const {
//   getAllGrandmas,
//   getOneGrandma,
//   getDishesByGrandmaId,
//
//   createNewGrandma,
//   logUserOut,
//   logUserIn,
//   isLoggedIn
// } = require("../db/queries/grandmaQueries.js");
//
// const { loginRequired } = require("../auth/helpers");
// const passport = require("../auth/locals");
//
// router.get("/", async (req, res, next) => {
//   try {
//     const users = await getAllUsers();
//   } catch (e) {
//     next(e);
//   }``
//   return res.status(200).json({
//     status: "success",
//     users,
//     message: "all users"
//   });
// });
//
// router.get("/:grandma_id", getOneGrandma);
// router.get("/:grandma_id/dishes", getDishesByGrandmaId);
// router.post("/new", createNewGrandma);
//
// router.post("/login", passport.authenticate("local", {}), logUserIn);
// router.post("/logout", loginRequired, logUserOut);
// router.post("/isLoggedIn", isLoggedIn);
// router.delete("/:grandma_id", recordNaturalCauses);
//
// module.exports = router;
