const passport = require("passport");
const db = require("../db/connection");

// module.exports = () => {
//   passport.serializeUser((user, done) => {
//     done(null, { email: user.email, id: user.id });
//   });

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one("SELECT * FROM grandmas WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        done(null, user.email);
      })
      .catch(err => {
        done(err, null);
      });
  });
};

//   passport.deserializeUser((grandma, done) => {
//     db.one("SELECT * FROM grandmas WHERE email = ${email}", {
//       email: grandmas.email
//     })
//       .then(grandma => {
//         done(null, {
//           email: grandma.email,
//           id: grandma.id
//         });
//       })
//       .catch(err => {
//         done(err, null);
//       });
//   });
// };
