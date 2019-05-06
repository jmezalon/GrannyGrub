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
        <Link className="grandma-link" to="/mainpage">
          <p>{"<--"} to Grandma</p>
        </Link>
        <h4>Please provide your contact information below</h4>

        <OrderForm full_name={full_name} dish={dish} count={count} />

        <p>
          {count} {dish.name} for ${price}{" "}
        </p>

        <Link to={`/order/dish/${parseInt(dish.id)}`}>
          <button id="edit-button">edit</button>
        </Link>
      </div>
    </Modal>
  );
};

export default Checkout;
