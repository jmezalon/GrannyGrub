const db = require("../connection");

const postNewOrder = (req, res, next) => {
  db.none(
    "INSERT INTO orders (dish_id, user_id, name, phone_number, isCompleted) VALUES (${dish_id}, ${user_id}, ${full_name}, ${phone_number}, ${isCompleted})",
    {
      dish_id: parseInt(req.body.dish_id),
      user_id: parseInt(req.body.user_id),
      full_name: req.body.full_name,
      phone_number: req.body.phone_number,
      isCompleted: false
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
  const order_id = parseInt(req.params.id);
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
  const user_id = parseInt(req.params.user_id);
  db.any(
    `SELECT orders.id AS order_id, orders.name AS full_name, phone_number, users.id AS user_id, dishes.id AS dish_id, dishes.user_id AS grandma_id FROM orders JOIN users ON users.id = orders.user_id JOIN dishes ON dishes.id = orders.dish_id
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
  const grandma_id = parseInt(req.params.grandma_id);

  db.any(
    "SELECT orders.id AS order_id, users.id AS id, orders.name AS full_name, orders.phone_number AS phone_number, dishes.id AS dish_id, dishes.user_id AS grandma_id, dishes.name AS dish_name, dishes.type AS dish_type, quantity, remaining_quantity FROM orders LEFT JOIN users ON users.id = orders.user_id FULL JOIN dishes ON dishes.id = orders.dish_id WHERE users.id = $1",
    [grandma_id]
  )
    .then(orders => {
      res.status(200).json({
        status: "success",
        orders: orders,
        message: "single order for user"
      });
    })
    .catch(err => next(err));
};

const orderSummary = (req, res, next) => {
  let user_id = parseInt(req.body.id);
  db.any(
    "SELECT users.id AS user_id, first_name, last_name, email, phone_number, isGrandma, building_number, address, zip_code, dishes.id AS dish_id, name, price, timeframe, orders.id AS order_id, isCompleted  FROM orders JOIN users ON orders.user_id = users.id JOIN dishes ON dishes.id = orders.dish_id WHERE users.id = $1",
    [user_id]
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

//const orderSummary = (req, res, next) => {

// const user_id = parseInt(req.params.user_id;
//
// db.any(
//   "SELECT users.id AS user_id, first_name, last_name, email, dishes.user_id AS grandma_id, phone_number, isGrandma, building_number, address, zip_code, dishes.id AS dish_id, name, price, timeframe, orders.id AS order_id, isCompleted  FROM orders JOIN users ON orders.user_id = users.id JOIN dishes ON dishes.id = orders.dish_id WHERE users.id=$1", [user_id]
