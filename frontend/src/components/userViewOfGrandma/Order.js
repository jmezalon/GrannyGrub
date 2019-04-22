import React from "react";

export const Order = () => {
  return (
    <div className="order-page">
      <h1>Your order</h1>
      <label>oder type: </label>
      {"order type here"}
      <div className="plus-minus-button">
        <label>quantity: </label>
        <button
          onClick={() => {
            console.log("I am minus button");
          }}
        >
          -
        </button>
        {"number here"}
        <button
          onClick={() => {
            console.log("I am plus button");
          }}
        >
          +
        </button>

        <br />
      </div>
      <>
        <label>description: </label>
        {"description here"}
      </>
      <br />
      <br />
      <button
        onClick={() => {
          console.log("I am submit, should go to paypal now");
        }}
      >
        Checkout
      </button>
    </div>
  );
};
