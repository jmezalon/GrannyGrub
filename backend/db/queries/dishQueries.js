const db = require('../connection');

// const getAllDishesByGrandma = (req, res, next) => {
//   let grandmaId = parseInt(req.params.id);
//
//   db.any(
//     "SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, grandmas.id AS grandma_id, first_name,last_name, COUNT(DISTINCT favorites.id )AS all_faves, profile_pic
// FROM dishes
// JOIN grandmas ON grandmas.id = dishes.grandma_id
// LEFT JOIN favorites ON favorites.dish_id = dishes.id
// WHERE dishes.grandma_id = $1
// GROUP BY dishes.id, grandmas.id",
//     [grandmaId]
//   )
//     .then(dishes => {
//       res.status(200).json({
//         status: "success",
//         dishes: dishes,
//         message: "Got All dishes"
//       });
//     })
//     .catch(err => {
//       console.log("error", err);
//       next(err);
//     });
// };

// const getAllDishesByCuisine = (req, res, next) => {
//   cuisineId = parseInt(req.params.id);
//
//   db.any(
//     'SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, grandmas.id AS grandma_id, latitude, longitude, cuisines.id AS cuisine_Id, type FROM dishes JOIN grandmas on(grandmas.id = dishes.grandma_id) JOIN cuisines ON(cuisines.id = dishes.cuisine_id) WHERE dishes.cuisine_id = $1',
//     [cuisineId]
//   )
//     .then(dishes => {
//       res.status(200).json({
//         status: 'success',
//         dishes: dishes,
//         message: 'Got All dishes by cuisine',
//       });
//     })
//     .catch(err => {
//       console.log('error', err);
//       next(err);
//     });
// };

const addNewDish = (req, res, next) => {
  //  if (req.body.isGrandma === 'true') {
  // req.body.name = req.body.name ? req.body.name : null;
  // req.body.description = req.body.description ? req.body.description : null;
  // req.body.img_url = req.body.img_url ? req.body.img_url : null;
  // req.body.price = req.body.price ? req.body.price : null;
  // req.body.type = req.body.type ? req.body.type : null;
  // req.body.timeframe = req.body.timeframe ? req.body.timeframe : null;
  // req.body.date = req.body.date ? req.body.date : null;
  // req.body.cuisine_id = req.body.cuisine_id ? req.body.cuisine_id : null;

  db.one(
    'INSERT INTO dishes( name, description,type, user_id, cuisine_id, img_url, price, date, timeframe, quantity) VALUES( ${name}, ${description}, ${type}, ${user_id}, ${cuisine_id}, ${img_url}, ${price}, ${date}, ${timeframe}, ${quantity}) RETURNING *',
    {
      name: req.body.name,
      description: req.body.description,
      user_id: parseInt(req.body.user_id),
      cuisine_id: parseInt(req.body.cuisine_id),
      img_url: req.body.img_url,
      price: req.body.price,
      date: req.body.date,
      type: req.body.type,
      timeframe: req.body.timeframe,
      quantity: parseInt(req.body.quantity),
    }
  )
    .then(dish => {
      console.log(dish);
      db.none(
        'INSERT INTO label_dishes(dish_id, label_id) VALUES (${dish_id}, ${label_id})',
        {
          dish_id: parseInt(dish.id),
          label_id: parseInt(req.body.label_id),
        }
      );
    })
    .then(() => {
      res.status(200).json({
        message: 'sucess',
      });
    })

    .catch(err => {
      console.log('error', err);
      return next(err);
    });

  //   } else {
  //     res.status(401).json({
  //       message: 'no.',
  //     });
  //   }
};

//no description

const getSingleDish = (req, res, next) => {
  const dish_id = parseInt(req.params.dish_id);

  db.one('SELECT * FROM dishes WHERE id=$1', [dish_id])
    .then(dish => {
      res.status(200).json({
        status: 'success',
        dish: dish,
        message: 'got single dish',
      });
    })
    .catch(err => {
      console.log('error', err);
      // next(err);
    });
};

const fixDish = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + '=${' + key + '}');
  });
  let queryString = queryStringArray.join(', ');
  db.none(
    'UPDATE dishes SET ' + queryString + ' WHERE id=' + req.params.id,
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Updated a user!',
      });
    })
    .catch(err => next(err));
};
// const getDishesByGrandmaId = (req, res, next) => {
//   let userId = parseInt(req.params.user_id);
//
//   db.any(
//     "SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price,timeframe, isGrandma, users.id AS user_id, first_name,last_name, profile_pic, labels.id AS label_id, type FROM dishes JOIN users ON users.id = dishes.user_id LEFT JOIN labels on labels.dish_id = dishes.id WHERE dishes.user_id=$1 GROUP BY dishes.id, users.id",
//     [userId]
//   )
//     .then(dishes => {
//       res.status(200).json({
//         status: "success",
//         dishes: dishes,
//         message: "all dishes for a grandma"
//       });
//     })
//     .catch(err => next(err));
// };

const deleteDish = (req, res, next) => {
  const dish_id = parseInt(req.params.id);
  db.none('DELETE FROM dishes WHERE id= $1', [dish_id])
    .then(() => {
      res.status(200).json({ message: 'dish deleted' });
    })
    .catch(err => {
      console.log('error', err);
    });
};

module.exports = {
  addNewDish,
  getSingleDish,
  fixDish,
  deleteDish,
};
