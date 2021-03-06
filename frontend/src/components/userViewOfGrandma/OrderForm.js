import React, { useState } from "react";
import { Link } from "react-router-dom";

const stripe = window.Stripe("pk_test_7q9J4KUlXUhL4lc4wOXrOyPG00jnL2yhFk");

function OrderForm({
  dish,
  count,
  order_type,
  currentUser,
  loggedIn,
  handleUserSignUpType
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [hasAttemptedToSubmit, setHasAttemptedToSubmit] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setHasAttemptedToSubmit(true);

    let customSuccessUrl;
    if (process.env.NODE_ENV !== "production") {
      customSuccessUrl = `http://localhost:3000/order/dish/6/confirmation`;
    } else {
      customSuccessUrl = `https://grannygrub.herokuapp.com/order/dish/6/confirmation`;
    }

    if (
      (dish.quantity &&
        name !== "" &&
        phoneNumber !== "" &&
        dish.remaining_quantity !== 0) ||
      !loggedIn
    ) {
      let granny = {
        name,
        phoneNumber,
        address,
        dish,
        count: count,
        order_type
      };
      window.localStorage.setItem("grandma", JSON.stringify(granny));

      stripe
        .redirectToCheckout({
          items: [{ sku: "sku_F2eK1FqKuFI7aa", quantity: count }],
          successUrl: customSuccessUrl,
          cancelUrl: "https://example.com/cancel"
        })
        .then(result => {
          console.log("where am I?!");
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
    }
  };

  return (
    <form className="user-info-form" onSubmit={handleSubmit}>
      {!currentUser.first_name ? (
        <div>
          <h1 id="checkout-as"> Join GrannyGrub </h1>
          <div className="join">
            <Link to="/auth/signup">
              <button
                onClick={handleUserSignUpType}
                className="checkout-login-btn"
              >
                {" "}
                Sign Up{" "}
              </button>
            </Link>
            <br />

            <Link to="/auth/login">
              <button
                className="checkout-login-btn"
                onClick={handleUserSignUpType}
              >
                {" "}
                Login{" "}
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="user-input">
        <h1 id="checkout-as">
          {" "}
          {currentUser.first_name && !currentUser.isgrandma
            ? `Welcome ${currentUser.first_name}`
            : "Checkout As Guest"}{" "}
        </h1>

        <input
          required
          id="full-name"
          name="full_name"
          placeholder="Full Name"
          value={
            currentUser.first_name
              ? currentUser.first_name + " " + currentUser.last_name
              : name
          }
          onChange={e => setName(e.target.value)}
        />

        <input
          required
          id="phone-number"
          name="phone_number"
          placeholder="Phone Number"
          value={
            currentUser.phone_number ? currentUser.phone_number : phoneNumber
          }
          onChange={e => setPhoneNumber(e.target.value)}
        />

        <input
          required
          id="address"
          name="address"
          placeholder="Full Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>

      <div id="checkout-order-btn">
        <button id="dish-checkout-button">Order</button>
      </div>
    </form>
  );
}

export default OrderForm;

// let quantity;
// if (!dish.remaining_quantity) {
//   quantity = parseInt(dish.quantity - count);
// } else {
//   quantity = parseInt(dish.remaining_quantity - count);
// }

// let amount_left = { remaining_quantity: quantity };
// TODO when checkout complete
// await axios.post("/orders/new", {
//   user_id: parseInt(dish.user_id),
//   dish_id: parseInt(dish.id),
//   full_name: name,
//   phone_number: phoneNumber
// });
// await axios.patch(
//   `/dishes/update/${parseInt(dish.id)}`,
//   amount_left
// );

// this.setState({ confirmation: true });
// await history.push(
//   `/order/dish/${dish.id}/confirmation`
// );
