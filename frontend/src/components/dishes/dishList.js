import React from "react";
import Dish from "./dish";

const DishList = ({ dishes, handleClick }) => {
  if (!dishes.length) {
    return (
      <div className="dish-view">
        <h3>
          {" "}
          This granny currently doesnt have any dishes to offer for this type of
          order{" "}
        </h3>
        <h4> please checkback later </h4>
      </div>
    );
  } else {
    return dishes.map(dish => {
      return <Dish dish={dish} handleClick={handleClick} />;
    });
  }
};

export default DishList;
