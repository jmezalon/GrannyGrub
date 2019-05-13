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
  order_type,
  address,
  confirmation,
  handleUserSignUpType
}) => {
  console.log("here");

  return (
    <Modal>
      <div className="info-order">
        <div id="dish-image-order">
          <img src={dish.img_url} alt="dish" />
        </div>

        <div id="checkout-left-side">
          <h3> Order details: </h3>
          <p id="checkout-dish-name">
            {count} X {dish.name}
            {count > 1 ? "s" : ""}
          </p>

          <div className="checkout-order-info">
            <p>Order Total: ${price}</p>
            <p>Order Type: {order_type}</p>
          </div>

          <div>
            <p> Need to make changes to this order? </p>
            <Link to={`/order/dish/${parseInt(dish.id)}`}>
              <button id="edit-button">edit</button>
            </Link>
          </div>
        </div>

        <div id="checkout-right-side">
          <div>
            <OrderForm
              full_name={full_name}
              dish={dish}
              count={count}
              address={address}
              handleUserSignUpType={handleUserSignUpType}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Checkout;
