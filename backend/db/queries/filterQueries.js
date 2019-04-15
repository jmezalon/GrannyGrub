const db = require('../connection');

const filterByCuisineMap = (req, res, next) => {
  cuisine_id = parseInt(req.params.id);

  db.any(
    'SELECT users.id AS user_id, longitude, latitude, first_name, last_name, profile_pic, cuisines.type AS cuisine_type FROM users LEFT JOIN cuisines ON cuisines.id = users.cuisine_id WHERE users.cuisine_id = $1 GROUP BY users.id, longitude, latitude, first_name, last_name, cuisines.type',
    [cuisine_id]
  )
    .then(grandmas => {
      res.status(200).json({
        status: 'success',
        grandma: grandmas,
        message: 'filtered by cuisine',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const filterByCuisine = (req, res, next) => {
  cuisine_id = parseInt(req.params.id);

  db.any(
    'SELECT users.id AS user_id, longitude, latitude, first_name, last_name,  profile_pic, ARRAY_AGG(dishes.timeframe) AS timeframes, cuisines.type AS cuisine_type, ARRAY_AGG(dishes.type) AS dish_type FROM users LEFT JOIN dishes ON users.id = dishes.user_id JOIN cuisines ON cuisines.id = users.cuisine_id WHERE users.cuisine_id = $1 GROUP BY users.id, longitude, latitude, first_name, last_name, cuisines.type',
    [cuisine_id]
  )
    .then(grandmas => {
      res.status(200).json({
        status: 'success',
        grandma: grandmas,
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
      "SELECT users.id AS user_id, longitude, latitude, first_name, last_name, profile_pic,  ARRAY_AGG(dishes.timeframe) AS timeframes, cuisines.type AS cuisine_type, dishes.type AS dish_type FROM users LEFT JOIN dishes ON users.id = dishes.user_id JOIN cuisines ON cuisines.id = users.cuisine_id WHERE dishes.type= 'sit-down' GROUP BY users.id, longitude, latitude, first_name, last_name,dishes.type, cuisines.type",
      [dish_type]
    )
      .then(grandmas => {
        res.status(200).json({
          status: 'success',
          grandma: grandmas,
          message: 'filtered by cuisine',
        });
      })
      .catch(err => {
        console.log('error', err);
        next(err);
      });
  } else if (dish_type === 1) {
    db.any(
      "SELECT users.id AS user_id, longitude, latitude, first_name, last_name, profile_pic, ARRAY_AGG(dishes.timeframe) AS timeframes, cuisines.type AS cuisine_type, dishes.type AS dish_type FROM users LEFT JOIN dishes ON users.id = dishes.user_id JOIN cuisines ON cuisines.id = users.cuisine_id WHERE dishes.type= 'pick-up' GROUP BY users.id, longitude, latitude, first_name, last_name,dishes.type, cuisines.type",
      [dish_type]
    )
      .then(grandmas => {
        res.status(200).json({
          status: 'success',
          grandma: grandmas,
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
    'ELECT DISTINCT label_name, labels.id AS label_id, dishes.id AS dish_id, dishes.user_id AS grandma_id,  profile_pic,longitude, latitude, first_name, last_name,dishes.type AS dish_type, timeframe FROM label_dishes JOIN dishes ON label_dishes.dish_id = dishes.id JOIN users ON dishes.user_id = users.id  JOIN labels ON label_dishes.label_id = labels.id  WHERE label_dishes.label_id = $1',

    [label_id]
  )
    .then(grandmas => {
      res.status(200).json({
        status: 'success',
        grandma: grandmas,
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
  filterByCuisineMap,
};
