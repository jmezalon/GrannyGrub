import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal.js";

const Checkout = ({
  handleFormSubmit,
  handleChange,
  handleEdit,
  goBack,
  full_name,
  phone_number,
  empty_field_name,
  empty_field_number,
  count,
  dish,
  price
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
        <form className="user-info-form" onSubmit={handleFormSubmit}>
          <div className="user-input">
            <input
              id="full-name"
              name="full_name"
              placeholder="your full name"
              value={full_name}
              onChange={handleChange}
            />

            <input
              id="phone-number"
              name="phone_number"
              placeholder="phone number"
              value={phone_number}
              onChange={handleChange}
            />
          </div>
          <div id="required-info">
            {empty_field_name && empty_field_number ? (
              <p>please add your contact info</p>
            ) : empty_field_name ? (
              <p>please add your name</p>
            ) : empty_field_number ? (
              <p>please add your number</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <button id="dish-checkout-button">order</button>
          </div>
        </form>

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
