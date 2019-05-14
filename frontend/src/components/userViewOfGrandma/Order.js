import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Modal } from "./Modal.js";

class Order extends React.Component {
  render() {
    const { dish, count } = this.props;
    let price = (dish.price * count).toFixed(2);
    // let onedish = [];
    let labels;
    if (dish.length > 0) {
      return (labels = dish.lable_list.map(label => {
        return <div>label</div>;
      }));
    }
    console.log("labels here", labels);
    return (
      <>
        <button className="back-to-grandma">
          <Link className="grandma-link" to={`/grandma/${dish.user_id}`}>
            Back to Grandmas Page
          </Link>
        </button>

        <Modal>
          <div>
            <div id="dish-image">
              <img src={dish.img_url} alt="dish" />
            </div>
            <div>
              <p> {dish.lable_list ? dish.lable_list.join(" - ") : ""}</p>
            </div>

            <div className="dish-info">
              <div id="order-header">
                <p id="dish-name">{dish.name}</p>
                <p> ${dish.price} </p>
              </div>

              <div id="info-container">
                <div id="dish-desc">
                  <p>{dish.description}</p>

                  <h4>For {dish.timeframe}</h4>
                </div>
              </div>

              <div className="checkout-order-info">
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
                <div id="order-page-type">
                  <p>
                    Order Type:{" "}
                    {dish.ispickup ? (
                      <div id="order-type-btns">
                        <button
                          className={
                            this.props.order_type === "delivery"
                              ? "order-type-btns-selected"
                              : "order-type-btns"
                          }
                          value="Delivery"
                          onClick={this.props.handleTypeChange}
                        >
                          Delivery
                        </button>

                        <button
                          onClick={this.props.handleTypeChange}
                          className={
                            this.props.order_type === "pickup"
                              ? "order-type-btns-selected"
                              : "order-type-btns"
                          }
                          value="Pick-up"
                        >
                          Pick-up
                        </button>
                      </div>
                    ) : (
                      <button className="order-type-btns-selected">
                        Delivery
                      </button>
                    )}{" "}
                  </p>
                </div>
              </div>

              <div className="dish-checkout">
                <p>Order Total: ${price} </p>
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
        </Modal>
      </>
    );
  }
}

export default withRouter(Order);
