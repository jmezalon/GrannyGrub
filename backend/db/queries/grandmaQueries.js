const db = require("../connection");
const authHelpers = require("../../auth/helpers");

const getAllGrandmas = (req, res, next) => {
  db.any("SELECT * FROM grandmas")
    .then(grandmas => {
      res.status(200).json({
        status: "success",
        grandmas: grandmas,
        message: "all grandmas"
      });
    })
    .catch(err => next(err));
};

const getOneGrandma = (req, res, next) => {
  db.one("SELECT * FROM grandmas WHERE id = ${id}", {
    id: parseInt(req.params.grandma_id)
  })
    .then(grandma => {
      res.status(200).json({
        status: "success",
        grandma: grandma,
        message: "single grandma"
      });
    })
    .catch(err => next(err));
};

const getDishesByGrandmaId = (req, res, next) => {
  let grandmaId = parseInt(req.params.grandma_id);

  db.any(
    "SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, grandmas.id AS grandma_id, first_name,last_name, COUNT(DISTINCT favorites.id )AS all_faves, profile_pic FROM dishes JOIN grandmas ON grandmas.id = dishes.grandma_id LEFT JOIN favorites ON favorites.dish_id = dishes.id WHERE dishes.grandma_id=$1 GROUP BY dishes.id, grandmas.id",
    [grandmaId]
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

const createNewGrandma = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);

  req.body.profile_pic = req.body.profile_pic ? req.body.profile_pic : null;
  req.body.bio = req.body.bio ? req.body.bio : null;
  req.body.longitude = req.body.longitude ? req.body.longitude : null;
  req.body.latitude = req.body.latitude ? req.body.latitude : null;

  db.none(
    "INSERT INTO grandmas( first_name, last_name, address, email, password_digest) VALUES( ${first_name}, ${last_name}, ${address}, ${email}, ${password})",

    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: hash
    }
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })

    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

const logUserOut = (req, res) => {
  req.logout();
  res.status(200).send("log out success");
};

const logUserIn = (req, res) => {
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    db.one("SELECT * FROM grandmas WHERE email=$1", [req.user]).then(user => {
      res.status(200).json({
        user: user
      });
    });
    // res.json({ username: req.user });
  } else {
    res.json({ email: null });
  }
};
const recordNaturalCauses = (req, res, next) => {
  let grannyId = parseInt(req.params.grandma_id);
  db.none("DELETE FROM grandmas WHERE id = ${grannyId}", { grannyId })
    .then(() => {
      res.status(200).json({
        message: "granny rest in peace"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getOneGrandma,
  getAllGrandmas,
  getDishesByGrandmaId,

  createNewGrandma,
  logUserOut,
  logUserIn,
  isLoggedIn,
  recordNaturalCauses
};
