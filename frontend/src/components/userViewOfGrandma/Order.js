import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Modal } from "./Modal.js";
// grandma/7
class Order extends React.Component {
  render() {
    const { dish, count } = this.props;
    let price = (dish.price * count).toFixed(2);
    return (
      <>
        <button className="back-to-grandma">
          <Link className="grandma-link" to={`/grandma/${dish.user_id}`}>
            Back to Grandma's Page
          </Link>
        </button>
        <Modal>
          <div>
            <div id="dish-image">
              <img src={dish.img_url} alt="dish" />
            </div>

            <div className="dish-info">
              <div id="name-price-time">
                <p id="dish-name">{dish.name}</p>
                <p className="checkout-order-info">Amount: ${price}</p>
                <p className="checkout-order-info">
                  Order Type: {dish.timeframe}{" "}
                  {dish.type === "pick-up" ? "for" : "to"}{" "}
                  {dish.type === "pick-up" ? "Pick-up" : "Stay"}
                </p>
              </div>
              <div className="dish-right-sie">
                <div id="dish-label">
                  <div className="plus-minus-button">
                    <label>Quantity: </label>
                    <i
                      onClick={this.props.handleSubChange}
                      className="fas fa-minus-square"
                    />{" "}
                    {this.props.count}{" "}
                    <i
                      onClick={this.props.handleAddChange}
                      className="fas fa-plus-square"
                    />
                  </div>
                </div>
                <div id="dish-desc">
                  <label>Description: </label>
                  <p>{dish.description}</p>
                </div>

                <div id="dish-checkout">
                  <Link
                    to={
                      dish.remaining_quantity !== 0
                        ? `/order/dish/${dish.id}/checkout`
                        : `/grandma/${dish.user_id}`
                    }
                  >
                    <button
                      id="dish-checkout-button"
                      onClick={this.props.handleCheckOutClick}
                    >
                      {dish.remaining_quantity === 0
                        ? "back to grandma"
                        : "Checkout"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default withRouter(Order);
