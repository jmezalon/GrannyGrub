import React from "react";

class Order extends React.Component {
  state = {
    count: 1
  };

  handleAddChange = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleSubChange = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {

    let dish = this.props.dish.dish;
   
    return (
      <div className="order-page">
        <h1>Your order</h1>
        <div className="dish-info">
          <p>{dish.name}</p>
          <img src={dish.img_url} alt="dish" id="dishImg" />
          <p>${dish.price}</p>
          <p>{dish.timeframe}</p>
        </div>
        <label>oder type: </label>
        {dish.type}
        <div className="plus-minus-button">
          <label>quantity: </label>
          <button onClick={this.handleSubChange}>-</button> {this.state.count}{" "}
          <button onClick={this.handleAddChange}>+</button>
          <br />
        </div>
        <>
          <label>description: </label>
          {dish.description}
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
  }
}

export default Order;
