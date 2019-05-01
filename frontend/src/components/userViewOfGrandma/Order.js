import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

class Order extends React.Component {
  componentDidMount() {
    this.props.getOneDish(parseInt(this.props.match.params.id));
  }

  render() {
    const { dish } = this.props;
    return (
      <div>
        <p id="back-button" onClick={() => this.props.goBack()}>
          {" "}
          {"<--"} to Grandma
        </p>

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
          <button onClick={this.props.handleSubChange}>-</button>{" "}
          {this.props.count}{" "}
          <button onClick={this.props.handleAddChange}>+</button>
          <br />
        </div>
        <>
          <label>description: </label>
          {dish.description}
        </>
        <br />
        <br />

        <Link to={`/order/dish/${dish.id}/checkout`}>
          <button onClick={this.props.handleCheckOutClick}>Checkout</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Order);
