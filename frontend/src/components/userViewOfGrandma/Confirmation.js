import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Modal } from "./Modal.js";
// import queryString from "query-string";

const Confirmation = ({ location: { search } }) => {
  // TODO update our server side db.
  let dish = JSON.parse(window.localStorage.getItem("grandma")).dish;
  let count = JSON.parse(window.localStorage.getItem("grandma")).count;

  // const { count } = queryString.parse(search);
  let formattedPrice = (parseFloat(dish.price, 10) * parseInt(count)).toFixed(
    2
  );

  return (
    <Modal>
      <div className="confirm-info-container">
        <h1>Your receipt:</h1>
        <p>Order Total: ${formattedPrice}</p>
        <h2>
          {dish.type === "pick-up" ? (
            <label>
              {count} {dish.name}(s) for {dish.type}
            </label>
          ) : (
            <label>
              {count} {dish.name}(s) to {dish.type}
            </label>
          )}
        </h2>

        <h2>From Grandma {dish.first_name}</h2>
        <img className="confirm-granny-img" src={dish.img_url} alt={"Kaira"} />
        <p>
          {/* Address: {dish.building_number} {dish.address} {dish.zip_code} */}
          Address: {dish.address} {dish.zip_code}
        </p>

        <p>
          Time: {dish.type === "pick-up" ? "around" : "at"} {dish.timeframe}{" "}
          {dish.date.slice(0, 10) ? "on" : ""}{" "}
          {dish.date.slice(0, 10) ? dish.date.slice(0, 10) : ""}
        </p>
        <p>Grandma {dish.first_name} cannot wait to see you!!!</p>
        <h1>Thank You!</h1>
      </div>
    </Modal>
  );
};

export default withRouter(Confirmation);
