const db = require('../connection');

const filterByCuisine = (req, res, next) => {
  cuisine_id = parseInt(req.params.id);

  db.any(
    'SELECT dishes.id AS dish_id, cuisines.type AS cuisine_type, longitude, latitude, first_name, last_name, dishes.type AS dish_type, timeframe, cuisines.id AS cuisine_Id FROM users JOIN cuisines ON users.cuisine_id = cuisines.id JOIN dishes ON dishes.user_id = users.id WHERE dishes.cuisine_id = $1',
    [cuisine_id]
  )
    .then(grandma => {
      res.status(200).json({
        status: 'success',
        grandma: grandma,
        message: 'filtered by cuisine',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const filterByType = (req, res, next) => {
  dish_type = Number(req.params.id);

  if (dish_type === 0) {
    db.any(
      "SELECT dishes.id AS dish_id, cuisines.type AS cuisine_type, longitude, latitude, first_name, last_name, timeframe, cuisines.id AS cuisine_Id, dishes.type AS dish_type FROM users JOIN cuisines ON users.cuisine_id = cuisines.id JOIN dishes ON dishes.user_id = users.id WHERE dishes.type = 'sit-down'",
      [dish_type]
    )
      .then(grandma => {
        res.status(200).json({
          status: 'success',
          grandma: grandma,
          message: 'filtered by cuisine',
        });
      })
      .catch(err => {
        console.log('error', err);
        next(err);
      });
  } else if (dish_type === 1) {
    db.any(
      "SELECT dishes.id AS dish_id, cuisines.type AS cuisine_type, longitude, latitude, first_name, last_name, timeframe, cuisines.id AS cuisine_Id, dishes.type AS dish_type FROM users JOIN cuisines ON users.cuisine_id = cuisines.id JOIN dishes ON dishes.user_id = users.id WHERE dishes.type = 'pick-up'",
      [dish_type]
    )
      .then(grandma => {
        res.status(200).json({
          status: 'success',
          grandma: grandma,
          message: 'filtered by cuisine',
        });
      })
      .catch(err => {
        console.log('error', err);
        next(err);
      });
  }
};

const filterByLabel = (req, res, next) => {
  label_id = parseInt(req.params.id);

  db.any(
    'SELECT label_name, labels.id AS label_id, dishes.id AS dish_id, dishes.user_id AS grandma_id, longitude, latitude, first_name, last_name,dishes.type AS dish_type, timeframe FROM label_dishes JOIN dishes ON label_dishes.dish_id = dishes.id JOIN users ON dishes.user_id = users.id JOIN labels ON label_dishes.label_id = labels.id WHERE label_dishes.label_id = $1',
    [label_id]
  )
    .then(grandma => {
      res.status(200).json({
        status: 'success',
        grandma: grandma,
        message: 'filtered by cuisine',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

module.exports = {
  filterByCuisine,
  filterByLabel,
  filterByType,
};
