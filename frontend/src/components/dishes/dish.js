import React from "react";
import { Link, withRouter } from "react-router-dom";

const Dish = ({ dish, handleClick }) => {
  let dish_name = dish.name.toUpperCase();
  return (
    <div id="dish-container">
      <div className="dish-view" key={dish.dish_id}>
        <div className="dish-left-side">
          <div id="dish-header">
            <h2 id="dish-name"> {dish_name}</h2>
            <p> ${dish.price} </p>
          </div>

          <div className="dishInfo">
            <p> Available for {dish.type} </p>

            <p> On {dish.date.slice(0, 10)} </p>
            <p> For {dish.timeframe} </p>
          </div>

          <div id="dish-bottom-left">
            <Link
              to={
                dish.remaining_quantity !== 0
                  ? `/order/dish/${dish.dish_id}`
                  : null
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
              <p className="remaining-quantity">
                {dish.type === "pick-up"
                  ? "Available Dishes:"
                  : "Available Seats:"}{" "}
                {dish.remaining_quantity === null
                  ? dish.quantity
                  : dish.remaining_quantity}{" "}
                / {dish.quantity}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="dish-right-side">
          <img src={dish.img_url} alt="dish" className="dish_img" />
          <p id="dish-lables"> lables go here </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dish);

//todo
//add if else for btn if remaining_quantity = 0.
