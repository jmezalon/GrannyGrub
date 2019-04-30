import React from "react";
import axios from "axios";
import Confirmation from "./Confirmation";
import Checkout from "./Checkout";

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
    // await this.props.match.history.push("/order/confirmation");
  };

  render() {
    let { grandma } = this.props;
    let {
      full_name,
      phone_number,
      empty_field_name,
      empty_field_number,
      count
    } = this.state;
    let dish = this.props.dish.dish;
    if (dish === undefined)
      return <p>Please check your email/phone for confirmation</p>;
    let price = dish.price * this.state.count;
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
          <Checkout
            handleFormSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
            handleEdit={this.handleEdit}
            full_name={full_name}
            phone_number={phone_number}
            empty_field_name={empty_field_name}
            empty_field_number={empty_field_number}
            count={count}
            dish={dish}
            price={price}
            goBack={this.props.goBack}
          />
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
