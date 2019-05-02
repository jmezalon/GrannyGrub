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
      <div>
        <h4>Please provide your contact information below</h4>
        <Link to="/mainpage">
          <p>{"<--"} to Grandma</p>
        </Link>
        <div>
          <form className="user-info-form" onSubmit={handleFormSubmit}>
            <input
              name="full_name"
              placeholder="your full name"
              value={full_name}
              onChange={handleChange}
            />

            <input
              name="phone_number"
              placeholder="phone number"
              value={phone_number}
              onChange={handleChange}
            />
            {empty_field_name && empty_field_number ? (
              <p>please add your contact info</p>
            ) : empty_field_name ? (
              <p>please add your name</p>
            ) : empty_field_number ? (
              <p>please add your number</p>
            ) : (
              ""
            )}

            <button>order</button>
          </form>
        </div>
        <div>
          <p>
            {count} {dish.name} for ${price}{" "}
          </p>
          <img src={dish.img_url} alt="dish" id="dishImg" />

          <Link to={`/order/dish/${parseInt(dish.id)}`}>
            <button>edit</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default Checkout;
