const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const db = require("../db/connection");

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);
init();

// passport.use(
//   new LocalStrategy({ usernameFeild: "email" }, (email, password, done) => {
//     db.one("SELECT * FROM grandmas WHERE email = ${email}", {
//       email: email
//     })
//       .then(grandma => {
//         if (!helpers.comparePass(password, grandma.password_digest)) {
//           return done(null, false);
//         } else {
//           return done(null, grandma);
//         }
//       })
//       .catch(err => {
//         return done(err);
//       });
//   })
// );
// init();

module.exports = passport;

// ,
