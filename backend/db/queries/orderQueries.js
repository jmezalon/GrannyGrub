const db = require("../connection");

const postNewOrder = (req, res, next) => {
  db.none(
    "INSERT INTO orders (dish_id, user_id) VALUES (${dish_id}, ${user_id})",
    {
      dish_id: Number(req.body.dish_id),
      user_id: Number(req.body.user_id)
    }
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })
    .catch(err => {
      console.log("err", err);
      return next(err);
    });
};

const deleteOrder = (req, res, next) => {
  const order_id = Number(req.params.id);
  db.none("DELETE FROM orders WHERE id=$1", [order_id])
    .then(() => {
      res.status(200).json({
        message: "order deleted"
      });
    })
    .catch(err => {
      console.log("err", err);
    });
};

module.exports = {
  postNewOrder,
  deleteOrder
};
