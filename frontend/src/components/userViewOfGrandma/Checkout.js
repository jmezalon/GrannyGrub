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
  handleUserSignUpType,
  currentUser,
  loggedIn
}) => {
  return (
    <div className="xyz">
      <Link to={`/order/dish/${parseInt(dish.id)}`} id="back-link-order">
        <i className="fas fa-arrow-left" id="order-back-arrow" />
      </Link>
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
              <p>
                {order_type} Time:{" "}
                {dish.timeframe === "Lunch"
                  ? "12:00pm-2:00pm"
                  : "6:00pm-8:00pm"}
              </p>
            </div>

            <div id="checkout-edit">
              <p> Need to make changes to this order? </p>
              <Link to={`/order/dish/${parseInt(dish.id)}`}>
                <button id="edit-button">edit</button>
              </Link>
            </div>
          </div>

          <div id="checkout-right-side">
            <div>
              <OrderForm
                order_type={order_type}
                full_name={full_name}
                dish={dish}
                count={count}
                address={address}
                currentUser={currentUser}
                handleUserSignUpType={handleUserSignUpType}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
