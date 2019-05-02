import React from "react";
import { Link, withRouter } from "react-router-dom";

const Dish = ({ dish, handleClick }) => {
  return (
    <div className="dish-view" key={dish.dish_id}>
      <p id="tag">dishinfo</p>

      <div className="dishInfo">
        <div id="dish-header">
          <h2> {dish.name}</h2>
          <p> ${dish.price} </p>
        </div>

        <p> Available for {dish.type} </p>

        <p> On {dish.date.slice(0, 10)} </p>
        <p> For {dish.timeframe} </p>
      </div>

      <p id="tag"> btn&amount </p>

      <div id="dish-bottom-left">
        <Link
          to={
            dish.remaining_quantity !== 0 ? `/order/dish/${dish.dish_id}` : null
          }
        >
          <button>
            {" "}
            {dish.remaining_quantity === 0
              ? "sold out"
              : dish.type === "sit-down"
              ? "book"
              : "order"}{" "}
          </button>
        </Link>

        <div id="dish-quantity">
          <p>
            {" "}
            remaining{" "}
            {dish.remaining_quantity === null
              ? dish.quantity
              : dish.remaining_quantity}{" "}
          </p>
          <p>{dish.quantity} </p>
        </div>
      </div>
      <p id="tag"> btn&amount </p>
      <div className="dish-right-side">
        <img src={dish.img_url} alt="dish" id="dish_img" />
        <p> lables go here </p>
      </div>
    </div>
  );
};

export default withRouter(Dish);

//todo
//add if else for btn if remaining_quantity = 0.
