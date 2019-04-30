import React from "react";
import axios from "axios";
import Confirmation from "./Confirmation";

class Order extends React.Component {
  state = {
    count: 1,
    confirmation: true,
    full_name: "",
    phone_number: "",
    orderSummary: false,
    empty_field_name: false,
    empty_field_number: false
  };

  handleAddChange = () => {
    // console.log(this.props.dish.dish.quantity);
    if (this.props.dish.dish.remaining_quantity === null) {
      if (this.props.dish.dish.quantity > this.state.count) {
        this.setState({ count: this.state.count + 1 });
      }
    } else {
      if (this.props.dish.dish.remaining_quantity > this.state.count) {
        this.setState({ count: this.state.count + 1 });
      }
    }
  };

  handleSubChange = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  handleCheckOutClick = () => {
    this.setState({ confirmation: false });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      empty_field_name: false,
      empty_field_number: false
    });
  };

  handleEdit = () => {
    this.setState({ confirmation: true });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    let quantity;
    if (!this.props.dish.dish.remaining_quantity) {
      quantity = parseInt(this.props.dish.dish.quantity - this.state.count);
    } else {
      quantity = parseInt(
        this.props.dish.dish.remaining_quantity - this.state.count
      );
    }

    let amount_left = {
      remaining_quantity: quantity
    };
    if (
      this.props.dish.dish.quantity &&
      this.state.full_name !== "" &&
      this.state.phone_number !== "" &&
      this.props.dish.dish.remaining_quantity !== 0
    ) {
      await axios.post("/orders/new", {
        user_id: parseInt(this.props.dish.dish.user_id),
        dish_id: parseInt(this.props.dish.dish.dish_id),
        full_name: this.state.full_name,
        phone_number: this.state.phone_number
      });
      await axios.patch(
        `/dishes/update/${parseInt(this.props.dish.dish.dish_id)}`,
        amount_left
      );
      this.setState({ orderSummary: true });
    } else if (!this.state.full_name && !this.state.phone_number) {
      this.setState({ empty_field_name: true, empty_field_number: true });
    } else if (!this.state.phone_number) {
      this.setState({ empty_field_number: true });
    } else if (!this.state.full_name) {
      this.setState({ empty_field_name: true });
    }
  };

  render() {
    let { grandma } = this.props;
    let dish = this.props.dish.dish;
    let price = parseInt(dish.price) * parseInt(this.state.count);
    return (
      <div className="order-page">
        {this.state.confirmation ? (
          <div>
            <p id="back-button" onClick={() => this.props.goBack()}>
              {" "}
              {"<--"} to Grandma
            </p>

            <h1>Your order</h1>
            <div className="dish-info">
              <p>{dish.full_name}</p>
              <img src={dish.img_url} alt="dish" id="dishImg" />
              <p>${dish.price}</p>
              <p>{dish.timeframe}</p>
            </div>
            <label>oder type: </label>
            {dish.type}
            <div className="plus-minus-button">
              <label>quantity: </label>
              <button onClick={this.handleSubChange}>-</button>{" "}
              {this.state.count}{" "}
              <button onClick={this.handleAddChange}>+</button>
              <br />
            </div>
            <>
              <label>description: </label>
              {dish.description}
            </>
            <br />
            <br />
            <button onClick={this.handleCheckOutClick}>Checkout</button>
          </div>
        ) : !this.state.orderSummary ? (
          <div>
            <h4>Please provide your contact information below</h4>
            <p onClick={() => this.props.goBack()}> {"<--"} to Grandma</p>
            <div>
              <form className="user-info-form" onSubmit={this.handleFormSubmit}>
                <input
                  name="full_name"
                  placeholder="your full name"
                  value={this.state.full_name}
                  onChange={this.handleChange}
                />

                <input
                  name="phone_number"
                  placeholder="phone number"
                  value={this.state.phone_number}
                  onChange={this.handleChange}
                />
                {this.state.empty_field_name &&
                this.state.empty_field_number ? (
                  <p>please add your contact info</p>
                ) : this.state.empty_field_name ? (
                  <p>please add your name</p>
                ) : this.state.empty_field_number ? (
                  <p>please add your number</p>
                ) : (
                  ""
                )}

                <button>order</button>
              </form>
            </div>
            <div>
              <p>
                {this.state.count} {dish.name} for ${price}{" "}
              </p>
              <img src={dish.img_url} alt="dish" id="dishImg" />

              <button onClick={this.handleEdit}>edit</button>
            </div>
          </div>
        ) : (
          <Confirmation
            price={price}
            count={this.state.count}
            dish={dish}
            grandma={grandma}
          />
        )}
      </div>
    );
  }
}

export default Order;
