import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Modal } from "./Modal.js";
// import queryString from "query-string";

const Confirmation = ({ location: { search } }) => {
  // TODO update our server side db.
  let dish = JSON.parse(window.localStorage.getItem("grandma")).dish;
  let count = JSON.parse(window.localStorage.getItem("grandma")).count;
  let name = JSON.parse(window.localStorage.getItem("grandma")).name;

  // const { count } = queryString.parse(search);
  let formattedPrice = (parseFloat(dish.price, 10) * parseInt(count)).toFixed(
    2
  );

  return (
    <Modal>
      <div className="confirm-info-container">
        <h1>Order Summary</h1>

        <img className="confirm-granny-img" src={dish.img_url} alt={"Kaira"} />

        <div id="confirm-user-info">
          <h3>
            {" "}
            Your order from Granny {dish.first_name} will be delivered to{" "}
          </h3>
          <h4> {name} </h4>
          <p> at </p>
          <h5>user address </h5>

          <p>Withen the hour</p>
        </div>

        <div id="confirm-date">
          <p> {dish.timeframe} </p>

          <p>{dish.date.slice(0, 10)} </p>
        </div>

        <h2>Thank you for using grannygrub!</h2>
      </div>
    </Modal>
  );
};

export default withRouter(Confirmation);
