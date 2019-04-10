const db = require("../connection");

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
  if (req.body.isGrandma === "true") {
    db.none(
      "INSERT INTO dishes( name, description, user_id, cuisine_id, img_url, price, timeframe) VALUES( ${name}, ${description}, ${user_id}, ${cuisine_id}, ${img_url}, ${price}, ${timeframe})",
      {
        name: req.body.name,
        description: req.body.description,
        user_id: req.body.user_id,
        cuisine_id: req.body.cuisine_id,
        img_url: req.body.img_url,
        price: req.body.price,
        timeframe: req.body.timeframe,
        id: Number(req.body.id)
      }
    )
      .then(() => {
        res.status(200).json({
          message: "success"
        });
      })
      .catch(err => {
        console.log("error", err);
        return next(err);
      });
  } else {
    res.status(401).json({
      message: "no."
    });
  }
};

const getSingleDish = (req, res, next) => {
  const dish_id = parseInt(req.params.dish_id);

  db.one("SELECT * FROM dishes WHERE id=$1", [dish_id])
    .then(dish => {
      res.status(200).json({
        status: "success",
        dish: dish,
        message: "got single dish"
      });
    })
    .catch(err => {
      console.log("error", err);
      // next(err);
    });
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
  db.none("DELETE FROM dishes WHERE id= $1", [dish_id])
    .then(() => {
      res.status(200).json({ message: "dish deleted" });
    })
    .catch(err => {
      console.log("error", err);
    });
};

<<<<<<< HEAD
module.exports = {
  addNewDish,
  getSingleDish,
  getDishesByGrandmaId,
  deleteDish
};
=======
module.exports = { addNewDish, deleteDish };
>>>>>>> 1f3467a078409718b27ef2d6c7706753ea068512
