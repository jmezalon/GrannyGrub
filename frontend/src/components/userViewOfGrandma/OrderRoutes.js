import React from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import Confirmation from "./Confirmation";
import Checkout from "./Checkout";
import Order from "./Order";

class OrderRoutes extends React.Component {
  state = {
    count: 1,
    full_name: "",
    phone_number: "",
    address: "",
    orderSummary: false,
    empty_field_name: false,
    empty_field_number: false,
    order_type: "delivery",
    confirmation: false
  };

  componentDidMount() {
    this.props.getOneDish(parseInt(this.props.match.params.id));
  }

  handleAddChange = () => {
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

  handleTypeChange = e => {
    e.preventDefault();
    this.setState({
      order_type: e.target.value
    });
  };

  render() {
    let { grandma } = this.props;
    const {
      full_name,
      phone_number,
      empty_field_name,
      empty_field_number,
      order_type
    } = this.state;

    let dish = this.props.dish;

    if (!dish) {
      return <p>LOADING...</p>;
    }

    // This error for 3 * 6.89 is worth exploring why it was happening.
    // maybe look at video https://www.youtube.com/watch?v=PZRI1IfStY0
    let price = (dish.price * this.state.count).toFixed(2);

    // <Confirmation
    //   price={price}
    //   count={this.state.count}
    //   dish={dish}
    //   grandma={grandma}
    //   confirmation={this.state.confirmation}
    // />

    return (
      <Switch>
        <Route path={"/order/dish/:id/confirmation"} render={Confirmation} />

        <Route
          path={"/order/dish/:id/checkout"}
          render={props => (
            <Checkout
              address={this.state.address}
              count={this.state.count}
              dish={dish}
              confirmation={this.state.confirmation}
              price={price}
              goBack={this.props.goBack}
              order_type={order_type}
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
              order_type={order_type}
              handleTypeChange={this.handleTypeChange}
            />
          )}
        />
      </Switch>
    );
  }
}

export default OrderRoutes;
