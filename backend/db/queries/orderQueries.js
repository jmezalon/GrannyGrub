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

// const getAllOrders = (req, res, next) => {
//   db.any(
//     `SELECT orders.id AS order_id, users.id AS user_id, dishes.id AS dish_id, dishes.user_id AS grandma_id FROM orders JOIN users ON users.id = orders.user_id JOIN dishes ON dishes.id = orders.dish_id`
//   )
//     .then(orders => {
//       res.status(200).json({
//         status: "success",
//         orders,
//         message: "all orders"
//       });
//     })
//     .catch(err => next(err));
// };

const getAllOrderForSingleUser = (req, res, next) => {
  const user_id = Number(req.params.user_id);
  db.any(
    `SELECT orders.id AS order_id, users.id AS user_id, dishes.id AS dish_id, dishes.user_id AS grandma_id FROM orders JOIN users ON users.id = orders.user_id JOIN dishes ON dishes.id = orders.dish_id
    WHERE users.id = $1`,
    [user_id]
  )
    .then(orders => {
      res.status(200).json({
        status: "success",
        orders,
        message: "all orders for a single user"
      });
    })
    .catch(err => next(err));
};

const allOrdersForGrandma = (req, res, next) => {
  const grandma_id = Number(req.params.grandma_id);
  db.any(
    `SELECT orders.id AS order_id, users.id AS user_id, dishes.id AS dish_id, dishes.user_id AS grandma_id FROM orders JOIN users ON users.id = orders.user_id JOIN dishes ON dishes.id = orders.dish_id WHERE dishes.user_id = $1`,
    [grandma_id]
  )
    .then(order => {
      res.status(200).json({
        status: "success",
        order,
        message: "single order for user"
      });
    })
    .catch(err => next(err));
};

const orderSummary = (req, res, next) => {
  db.any(
    "SELECT users.id AS user_id, first_name, last_name, email, phone_number, isGrandma, building_number, address, zip_code, dishes.id AS dish_id, name, price, timeframe, orders.id AS order_id, isCompleted  FROM orders JOIN users ON orders.user_id = users.id JOIN dishes ON dishes.id = orders.dish_id"
  )
    .then(orders => {
      res.status(200).json({
        status: "success",
        orders,
        message: "all orders"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  postNewOrder,
  deleteOrder,
  orderSummary,
  getAllOrderForSingleUser,
  allOrdersForGrandma
};
