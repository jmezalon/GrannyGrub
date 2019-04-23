const db = require("../connection");

// const getAllDishesForLabel = (req, res, next) => {
//   const label_id = parseInt(req.params.label_id);
//
//   db.one("SELECT * FROM dishes WHERE id=$1", [label_id])
//     .then(dish => {
//       res.status(200).json({
//         status: "success",
//         dish: dish,
//         message: "got single dish"
//       });
//     })
//     .catch(err => {
//       console.log("error", err);
//       // next(err);
//     });
// };

const getAllLabels = (req, res, next) => {
  db.any("SELECT * FROM labels")
    .then(labels => {
      res.status(200).json({
        status: "success",
        labels: labels,
        message: " got all labels"
      });
    })
    .catch(err => next(err));
};

const addNewLabeledDish = (req, res, next) => {
  db.none(
    "INSERT INTO label_dishes(dish_id, label_id) VALUES (${dish_id}, ${label_id})",
    {
      dish_id: parseInt(req.body.dish_id),
      label_id: parseInt(req.body.label_id)
    }
  )
    .then(() => {
      res.status(200).json({
        message: "sucess"
      });
    })
    .catch(err => {
      console.log("error", err);
      return next(err);
    });
};

// const getAllLabels = (req, res, next) => {
//   db.any(
//     "SELECT labels.id AS label_id, type, dishes.id AS dish_id, name, description,cuisine_id, img_url, price, timeframe FROM labels JOIN dishes ON labels.dish_id = dishes.id GROUP BY dishes.id, labels.id ORDER BY type"
//   )
//     .then(labels => {
//       res.status(200).json({
//         status: "success",
//         labels: labels,
//         message: " got all labels"
//       });
//     })
//     .catch(err => next(err));
// };

module.exports = {
  getAllLabels,
  addNewLabeledDish
};
