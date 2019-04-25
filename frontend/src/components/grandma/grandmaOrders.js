import React from "react";

class Orders extends React.Component {
  render() {
    const orderDisplay = this.props.orders.map(order => {
      return (
        <div key={order.order_id} className="dish-view">
          <p>Order Number: {order.order_id} </p>
          <p>{order.name} </p>
          <p>{order.dish_type} </p>
          <p>
            remaining_quantity:{" "}
            {order.remaining_quantity !== null
              ? order.remaining_quantity
              : order.quantity}{" "}
          </p>
          <p>quantity: {order.quantity} </p>
        </div>
      );
    });

    return (
      <>
        <h1>orders go here </h1>
        <div>{orderDisplay}</div>
      </>
    );
  }
}

export default Orders;
