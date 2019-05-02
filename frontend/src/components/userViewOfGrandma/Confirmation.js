import React from "react";

const Confirmation = ({ price, count, grandma, dish }) => {
  console.log(dish);
  if (dish.id) {
    return (
      <div>
        <h1>Your receipt</h1>
        <p>Order Total: ${price}</p>
        <h1>
          {dish.type === "pick-up" ? (
            <label>
              {count} {dish.name}(s) for pickup
            </label>
          ) : (
            <label>
              {count} {dish.name}(s) to sit down
            </label>
          )}
        </h1>
        <img style={{ width: "300px" }} src={dish.img_url} alt={dish.name} />

        <h1>From Grandma {dish.last_name}</h1>
        <img
          style={{ width: "300px" }}
          src={dish.profile_pic}
          alt={dish.last_name}
        />
        <p>
          Address: {dish.building_number} {dish.address} {dish.zip_code}
        </p>

        <p>
          Time: {dish.type === "pick-up" ? "around" : "at"} {dish.timeframe}{" "}
          {dish.date.slice(0, 10) ? "on" : ""}{" "}
          {dish.date.slice(0, 10) ? dish.date.slice(0, 10) : ""}
        </p>
        <br />
        <p>Grandma {dish.last_name} cannot wait to see you!!!</p>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Confirmation;
