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

//get single grandma
//no info
//cuisine type

const getOneGrandmaInfo = (req, res, next) => {
  db.one(
    "SELECT users.id AS user_id, first_name, last_name, profile_pic, bio, cuisines.type AS cuisine_type, cuisines.id AS cuisine_id FROM users JOIN cuisines ON cuisines.id = users.cuisine_id WHERE users.id = ${id} GROUP BY users.id, cuisines.id",
    {
      id: parseInt(req.params.user_id)
    }
  )
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "single user"
      });
    })
    .catch(err => next(err));
};

const getDishesByGrandmaId = (req, res, next) => {
  let userId = parseInt(req.params.id);

  db.any(
    "SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price,timeframe, isGrandma, users.id AS user_id, first_name,last_name, profile_pic, labels.id AS label_id, type FROM dishes JOIN users ON users.id = dishes.user_id LEFT JOIN labels on labels.dish_id = dishes.id WHERE dishes.user_id=$1 GROUP BY dishes.id, users.id, labels.id",
    [userId]
  )
    .then(dishes => {
      res.status(200).json({
        status: "success",
        dishes: dishes,
        message: "all dishes for a grandma"
      });
    })
    .catch(err => next(err));
};

const getAllUsersListView = (req, res, next) => {
  db.any(
    "SELECT users.id AS user_id, first_name, last_name, latitude, longitude, timeframe, cuisines.type AS cuisine_type FROM users JOIN dishes ON dishes.user_id = users.id JOIN cuisines ON cuisines.id = users.cuisine_id"
  )
    .then(users => {
      res.status(200).json({
        status: "success",
        users: users,
        message: "all users"
      });
    })
    .catch(err => next(err));
};

// add dish type and location to this.

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

const fixGrandma = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");
  db.none(
    "UPDATE users SET " + queryString + " WHERE id=" + req.params.id,
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a dish!"
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
  getOneGrandmaInfo,
  getAllUsers,
  createNewUser,
  getDishesByGrandmaId,
  fixGrandma,
  logoutUser,
  loginUser,
  isLoggedIn,
  recordNaturalCauses,
  getAllUsersListView
};
