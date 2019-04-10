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
  db.any(
    "SELECT labels.id AS label_id, type, dishes.id AS dish_id, name, description,cuisine_id, img_url, price, timeframe FROM labels JOIN dishes ON labels.dish_id = dishes.id GROUP BY dishes.id, labels.id ORDER BY type"
  )
    .then(labels => {
      res.status(200).json({
        status: "success",
        labels: labels,
        message: " got all labels"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllLabels
};
