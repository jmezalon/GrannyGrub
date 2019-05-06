import React, { useState } from "react";
const stripe = window.Stripe("pk_test_7q9J4KUlXUhL4lc4wOXrOyPG00jnL2yhFk");

function OrderForm({ dish, count }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [hasAttemptedToSubmit, setHasAttemptedToSubmit] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setHasAttemptedToSubmit(true);

    if (
      dish.quantity &&
      name !== "" &&
      phoneNumber !== "" &&
      dish.remaining_quantity !== 0
    ) {
      let granny = { name, phoneNumber, dish };
      window.localStorage.setItem("grandma", JSON.stringify(granny));
      stripe
        .redirectToCheckout({
          items: [{ sku: "sku_F07j4svNDL4kN4", quantity: count }],
          successUrl: `http://localhost:3000/order/dish/10/confirmation?count=${count}`,
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
      <div className="user-input">
        <input
          id="full-name"
          name="full_name"
          placeholder="your full name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          id="phone-number"
          name="phone_number"
          placeholder="phone number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
      {hasAttemptedToSubmit && (
        <div id="required-info">
          {!name && <p>Please add your name</p>}
          {!phoneNumber && <p>Please add your phone number</p>}
        </div>
      )}
      <div>
        <button id="dish-checkout-button">order</button>
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
