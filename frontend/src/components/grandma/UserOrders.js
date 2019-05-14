import React from 'react';

class PreviousOrders extends React.Component {
  render() {
    let orderDisplay;
    //
    // const orderDisplay = this.props.orders.map(order => {
    //   return (
    //     <div key={order.order_id} className="dish-view">
    //       <p>Order Number: {order.order_id} </p>
    //       <p>{order.dish_name} </p>
    //       <p>{order.dish_type} </p>
    //       <br />
    //       <span>
    //         for {order.full_name}, <br /> phone number: {order.phone_number}
    //         <br />
    //       </span>
    //       <p>
    //         remaining_quantity:{" "}
    //         {order.remaining_quantity !== null
    //           ? order.remaining_quantity
    //           : order.quantity}{" "}
    //       </p>
    //       <p>quantity: {order.quantity} </p>
    //     </div>
    //   );
    // });

    return (
      <div id="user-orders">
        <h1>Your orders</h1>
        {this.props.hasOrder
          ? orderDisplay
          : 'you currently have no orders yet'}
      </div>
    );
  }
}

export default PreviousOrders;
