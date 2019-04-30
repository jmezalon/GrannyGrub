import React from "react";

const Confirmation = ({ price, count, grandma, dish }) => {
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

      <h1>From Grandma {grandma.last_name}</h1>
      <img
        style={{ width: "300px" }}
        src={grandma.profile_pic}
        alt={grandma.last_name}
      />
      <p>
        Address: {grandma.building_number} {grandma.address} {grandma.zip_code}
      </p>

      <p>
        Time: {dish.type === "pick-up" ? "around" : "at"} {dish.timeframe}{" "}
        {dish.date ? "on" : ""} {dish.date ? dish.date : ""}
      </p>
      <br />
      <p>Grandma {grandma.last_name} cannot wait to see you!!!</p>
    </div>
  );
};

export default Confirmation;
