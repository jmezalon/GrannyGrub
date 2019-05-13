import React from "react";
import { withRouter } from "react-router-dom";
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

        <img className="confirm-granny-img" src={dish.img_url} alt={"Wei"} />

        <div id="confirm-user-info">
          <h3>
            {" "}
            Your order from Granny {dish.first_name} will be delivered to:{" "}
          </h3>
          <h4> {name} </h4>
          <div id="confirm-user-address">
            <h5> At: 4321 56th st, Astoria, NY 11307</h5>

            <div className="confirm-date">
              <h6> {dish.timeframe} </h6>
              <h6> | </h6>
              <h6>{dish.date.slice(0, 10)} </h6>
            </div>
          </div>
        </div>

        <div id="confirm-order-info">
          <h3> Order details: </h3>
          <p id="checkout-dish-name">
            {count} X {dish.name}
            {count > 1 ? "s" : ""}
          </p>
          <br />
          <p>Order Total: ${formattedPrice}</p>
        </div>

        <h2>Thank you for using grannygrub!</h2>
      </div>
    </Modal>
  );
};

export default withRouter(Confirmation);
