const db = require("../connection");

const filterByCuisine = (req, res, next) => {
  cuisine_id = parseInt(req.params.id);

  db.any(
    "SELECT dishes.id AS dish_id, cuisines.type AS cuisine_type, longitude, latitude, first_name, last_name,  timeframe, cuisines.id AS cuisine_Id FROM users JOIN cuisines ON users.cuisine_id = cuisines.id JOIN dishes ON dishes.user_id = users.id WHERE dishes.cuisine_id = $1",
    [cuisine_id]
  )
    .then(grandma => {
      res.status(200).json({
        status: "success",
        grandma: grandma,
        message: "filtered by cuisine"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const filterByType = (req, res, next) => {
  cuisineId = parseInt(req.params.id);

  db.any(
    "SELECT dishes.id AS dish_id, cuisines.type AS cuisine_type, longitude, latitude, first_name, last_name,  timeframe, cuisines.id AS cuisine_Id FROM users JOIN cuisines ON users.cuisine_id = cuisines.id JOIN dishes ON dishes.user_id = users.id WHERE dishes.cuisine_id = $1",
    [cuisineId]
  )
    .then(grandma => {
      res.status(200).json({
        status: "success",
        grandma: grandma,
        message: "filtered by cuisine"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const filterByLabel = (req, res, next) => {
  label_id = parseInt(req.params.id);

  db.any(
    "SELECT dishes.id AS dish_id, cuisines.type AS cuisine_type, longitude, latitude, first_name, last_name,  timeframe, cuisines.id AS cuisine_Id FROM users JOIN cuisines ON users.cuisine_id = cuisines.id JOIN dishes ON dishes.user_id = users.id WHERE dishes.cuisine_id = $1",
    [label_id]
  )
    .then(grandma => {
      res.status(200).json({
        status: "success",
        grandma: grandma,
        message: "filtered by cuisine"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

module.exports = {
  filterByCuisine,
  filterByLabel,
  filterByType
};
