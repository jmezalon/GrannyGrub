const db = require('../connection');

const getAllDishesByGrandma = (req, res, next) => {
  grandmaId = parseInt(req.params.id);

  db.any(
    'SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, grandmas.id AS grandma_id, cuisines.id AS cuisine_Id, first_name,last_name, profile_pic, type FROM dishes JOIN grandmas on(grandmas.id = dishes.grandma_id) JOIN cuisines ON(cuisines.id = dishes.cuisine_id) WHERE dishes.grandma_id = $1',
    [grandmaId]
  )
    .then(dishes => {
      res.status(200).json({
        status: 'success',
        dishes: dishes,
        message: 'Got All dishes',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

const getAllDishesByCuisine = (req, res, next) => {
  cuisineId = parseInt(req.params.id);

  db.any(
    'SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, grandmas.id AS grandma_id, latitude, longitude, cuisines.id AS cuisine_Id, type FROM dishes JOIN grandmas on(grandmas.id = dishes.grandma_id) JOIN cuisines ON(cuisines.id = dishes.cuisine_id) WHERE dishes.cuisine_id = $1',
    [cuisineId]
  )
    .then(dishes => {
      res.status(200).json({
        status: 'success',
        dishes: dishes,
        message: 'Got All dishes',
      });
    })
    .catch(err => {
      console.log('error', err);
      next(err);
    });
};

module.exports = { getAllDishesByGrandma, getAllDishesByCuisine };
