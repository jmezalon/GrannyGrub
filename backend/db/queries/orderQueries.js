const db = require("../connection");

const orderSummary = (req, res, next) => {

  const user_id = parseInt(req.params.user_id;

  db.any(
    "SELECT users.id AS user_id, first_name, last_name, email, dishes.user_id AS grandma_id, phone_number, isGrandma, building_number, address, zip_code, dishes.id AS dish_id, name, price, timeframe, orders.id AS order_id, isCompleted  FROM orders JOIN users ON orders.user_id = users.id JOIN dishes ON dishes.id = orders.dish_id WHERE users.id=$1", [user_id]
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

//grandmas address + info, count, price, and order info
