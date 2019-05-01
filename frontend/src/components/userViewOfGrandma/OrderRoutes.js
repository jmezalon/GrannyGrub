import React from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import Confirmation from "./Confirmation";
import Checkout from "./Checkout";
import Order from "./Order";

class OrderRoutes extends React.Component {
  state = {
    count: 1,
    // confirmation: true,
    full_name: "",
    phone_number: "",
    orderSummary: false,
    empty_field_name: false,
    empty_field_number: false
  };

  handleAddChange = () => {
    // console.log(this.props.dish.dish.quantity);
    if (this.props.dish.remaining_quantity === null) {
      if (this.props.dish.quantity > this.state.count) {
        this.setState({ count: this.state.count + 1 });
      }
    } else {
      if (this.props.dish.remaining_quantity > this.state.count) {
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

  // handleCheckOutClick = () => {
  //   this.setState({ confirmation: false });
  // };

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
    if (!this.props.dish.remaining_quantity) {
      quantity = parseInt(this.props.dish.quantity - this.state.count);
    } else {
      quantity = parseInt(
        this.props.dish.remaining_quantity - this.state.count
      );
    }

    let amount_left = {
      remaining_quantity: quantity
    };
    if (
      this.props.dish.quantity &&
      this.state.full_name !== "" &&
      this.state.phone_number !== "" &&
      this.props.dish.remaining_quantity !== 0
    ) {
      await axios.post("/orders/new", {
        user_id: parseInt(this.props.dish.user_id),
        dish_id: parseInt(this.props.dish.id),
        full_name: this.state.full_name,
        phone_number: this.state.phone_number
      });
      await axios.patch(
        `/dishes/update/${parseInt(this.props.dish.id)}`,
        amount_left
      );
      this.setState({ orderSummary: true });
      await this.props.history.push(
        `/order/dish/${this.props.dish.id}/confirmation`
      );
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
    const {
      full_name,
      phone_number,
      empty_field_name,
      empty_field_number
    } = this.state;

    let dish = this.props.dish;

    if (!dish) {
      return <p>LOADING...</p>;
    }
    let price = dish.price * this.state.count;
    console.log(this.props);
    return (
      <Switch>
        <Route
          path={"/order/dish/:id/confirmation"}
          render={props => (
            <Confirmation
              price={price}
              count={this.state.count}
              dish={dish}
              grandma={grandma}
            />
          )}
        />

        <Route
          path={"/order/dish/:id/Checkout"}
          render={props => (
            <Checkout
              handleFormSubmit={this.handleFormSubmit}
              handleChange={this.handleChange}
              handleEdit={this.handleEdit}
              full_name={full_name}
              phone_number={phone_number}
              empty_field_name={empty_field_name}
              empty_field_number={empty_field_number}
              count={this.state.count}
              dish={dish}
              price={price}
              goBack={this.props.goBack}
            />
          )}
        />
        <Route
          exact
          path={"/order/dish/:id"}
          render={props => (
            <Order
              getOneDish={this.props.getOneDish}
              full_name={full_name}
              phone_number={phone_number}
              price={price}
              count={this.state.count}
              dish={dish}
              confirmation={this.state.confirmation}
              handleCheckOutClick={this.handleCheckOutClick}
              handleSubChange={this.handleSubChange}
              handleAddChange={this.handleAddChange}
              empty_field_name={empty_field_name}
              empty_field_number={empty_field_number}
              grandma={grandma}
            />
          )}
        />
      </Switch>
    );
  }
}

export default OrderRoutes;
