import React from "react";
import { Modal } from "./Modal.js";

const Confirmation = ({ price, count, grandma, dish }) => {
  // <img style={{ width: "300px" }} src={dish.img_url} alt={dish.name} />
  if (dish.id) {
    return (
      <Modal>
        <div className="confirm-info-container">
          <h1>Your receipt</h1>
          <p>Order Total: ${price}</p>
          <h2>
            {dish.type === "pick-up" ? (
              <label>
                {count} {dish.name}(s) for pickup
              </label>
            ) : (
              <label>
                {count} {dish.name}(s) to sit down
              </label>
            )}
          </h2>

          <h2>From Grandma {dish.last_name}</h2>
          <img
            className="confirm-granny-img"
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
          <p>Grandma {dish.last_name} cannot wait to see you!!!</p>
          <h1>Thank You!</h1>
        </div>
      </Modal>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Confirmation;
