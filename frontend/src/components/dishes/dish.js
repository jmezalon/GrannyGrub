import React from "react";
import { Link, withRouter } from "react-router-dom";

const Dish = ({ dish, handleClick }) => {
  return (
    <div className="dish-view" key={dish.dish_id}>
      <div className="dishInfo">
        <h3> {dish.name}</h3>
        <img src={dish.img_url} alt="dish" id="dish_img" />
        <p> ${dish.price} </p>
        <p> Meal type: {dish.type} </p>
      </div>
      <Link to={`/dish/${dish.dish_id}/order`}>
        <button onClick={() => handleClick({ dish })} value={dish}>
          {" "}
          {dish.type === "sit-down" ? "book" : "order"}{" "}
        </button>
      </Link>
      <div className="time-date-div">
        <p>timefrmae: {dish.timeframe} </p>
        <p> date: {dish.date.slice(0, 10)} </p>
      </div>
    </div>
  );
};

export default withRouter(Dish);

//todo
//add if else for btn if remaining_quantity = 0.
