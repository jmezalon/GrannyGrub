import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal.js";
import OrderForm from "./OrderForm";

const Checkout = ({
  goBack,
  full_name,
  phone_number,
  empty_field_name,
  empty_field_number,
  count,
  dish,
  price,
  confirmation
}) => {
  return (
    <Modal>
      <div className="info-order">
        <div id="dish-image-order">
          <img src={dish.img_url} alt="dish" />
        </div>
        <h4 id="provide-info-message" className="checkout-order-info">
          Please provide your contact information below.
        </h4>

        <OrderForm full_name={full_name} dish={dish} count={count} />

        <div id="name-price-time">
          <p id="dish-name">
            {count} {dish.name}(s)
          </p>
          <p className="checkout-order-info">Amount: ${price}</p>
          <p className="checkout-order-info">
            Order Type: {dish.timeframe}{" "}
            {dish.type === "pick-up" ? "for" : "to"}{" "}
            {dish.type === "pick-up" ? "Pick-up" : "Stay"}
          </p>
        </div>

        <Link to={`/order/dish/${parseInt(dish.id)}`}>
          <button id="edit-button">edit</button>
        </Link>
      </div>
    </Modal>
  );
};

export default Checkout;
