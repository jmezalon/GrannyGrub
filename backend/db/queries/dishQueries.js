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
  db.none(
    "INSERT INTO dishes( name, description, grandma_id, cuisine_id, img_url, price) VALUES( ${name}, ${description}, ${grandma_id}, ${cuisine_id}, ${img_url}, ${price})",
    {
      name: req.body.name,
      description: req.body.description,
      grandma_id: req.body.grandma_id,
      cuisine_id: req.body.cuisine_id,
      img_url: req.body.img_url,
      price: req.body.price,
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
};

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

module.exports = { addNewDish, deleteDish };
