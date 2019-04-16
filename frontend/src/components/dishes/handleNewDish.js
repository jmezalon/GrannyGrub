import React from "react";
import NewDishForm from "./NewDishForm";
// import axios from "axios";

class HandleNewDish extends React.Component {
  state = {
    dishName: "",
    type: "3",
    dishImg: "",
    cuisine_id: 8,
    labels: [],
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedQuantity: "",
    description: "",
    timeframe: "",
    date:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1) +
      "-" +
      (new Date().getDate() + 1 < 10
        ? "0" + (new Date().getDate() + 1)
        : new Date().getDate() + 1),
    user_id: 14,
    price: 3.99
  };

  componentDidMount() {
    this.props.getAllCuisines();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value + e.target.name);
  };

  handleQuantityChange = e => {
    this.setState({
      selectedQuantity: e.target.value
    });
    console.log(e.target.value);
  };

  handleDateChange = e => {
    this.setState({
      date: e.target.value
    });
    console.log(e.target.value);
  };

  handleDishType = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      type: e.target.value
    });
  };

  handleTimeFrame = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      timeframe: e.target.value
    });
  };

  // handleSitDown = e => {
  //   e.preventDefault();
  //   this.setState({
  //     type: "sit-down"
  //   });
  // };

  render() {
    console.log(this.props.cuisines);
    const {
      dishName,
      cuisine_id,
      labels,
      quantity,
      selectedQuantity,
      description,
      timeframe,
      pickUp,
      type,
      price,
      dishImg,
      user_id,
      date
    } = this.state;

    return (
      <>
        <NewDishForm
          dishName={dishName}
          quantity={quantity}
          type={type}
          dishImg={dishImg}
          cuisine_type={cuisine_id}
          user_id={user_id}
          price={price}
          date={date}
          selectedQuantity={selectedQuantity}
          handleChange={this.handleChange}
          handleTimeFrame={this.handleTimeFrame}
          handleDishType={this.handleDishType}
          handleDateChange={this.handleDateChange}
          handleSubmit={this.handleSubmit}
          handleQuantityChange={this.handleQuantityChange}
        />
      </>
    );
  }
}

export default HandleNewDish;