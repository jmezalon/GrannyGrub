const db = require("../connection");
const authHelpers = require("../../auth/helpers");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(users => {
      res.status(200).json({
        status: "success",
        users: users,
        message: "all users"
      });
    })
    .catch(err => next(err));
};

const getOneUser = (req, res, next) => {
  db.one("SELECT * FROM users WHERE id = ${id}", {
    id: parseInt(req.params.user_id)
  })
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "single user"
      });
    })
    .catch(err => next(err));
};

// const getDishesByUserId = (req, res, next) => {
//   let userId = parseInt(req.params.user_id);
//
//   db.any(
//     "SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, users.id AS user_id, first_name,last_name, COUNT(DISTINCT favorites.id )AS all_faves, profile_pic FROM dishes JOIN users ON users.id = dishes.user_id LEFT JOIN favorites ON favorites.dish_id = dishes.id WHERE dishes.user_id=$1 GROUP BY dishes.id, users.id",
//     [userId]
//   )
//     .then(dishes => {
//       res.status(200).json({
//         status: "success",
//         dishes: dishes,
//         message: "all dishes for a user"
//       });
//     })
//     .catch(err => next(err));
// };

const createNewUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);

  req.body.profile_pic = req.body.profile_pic ? req.body.profile_pic : null;
  req.body.building_number = req.body.building_number
    ? req.body.building_number
    : null;
  req.body.address = req.body.address ? req.body.address : null;
  req.body.zip_code = req.body.zip_code ? req.body.zip_code : null;
  req.body.bio = req.body.bio ? req.body.bio : null;
  req.body.latitude = req.body.latitude ? req.body.latitude : null;
  req.body.longitude = req.body.longitude ? req.body.longitude : null;
  req.body.cuisine_id = req.body.cuisine_id ? req.body.cuisine_id : null;

  db.one(
    "INSERT INTO users( first_name, last_name, email, phone_number, isGrandma, password_digest, building_number, address, zip_code) VALUES( ${first_name}, ${last_name}, ${email}, ${phone_number}, ${isGrandma}, ${password}, ${building_number}, ${address}, ${zip_code}) RETURNING *",

    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      isGrandma: req.body.isGrandma,
      password: hash,
      building_number: req.body.building_number,
      address: req.body.address,
      zip_code: req.body.zip_code
    }
  )
    .then(user => {
      res.status(200).json({
        message: "success",
        user,
        isGrandma: true
      });
    })
    .catch(err => next(err));
};

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ email: req.user });
  } else {
    res.status(401).json({ err: "Nobody logged in" });
  }
}

const recordNaturalCauses = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.none("DELETE FROM users WHERE id = ${userId}", { userId })
    .then(() => {
      res.status(200).json({
        message: "granny rest in peace"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getOneUser,
  getAllUsers,
  createNewUser,
  logoutUser,
  loginUser,
  isLoggedIn,
  recordNaturalCauses
};
