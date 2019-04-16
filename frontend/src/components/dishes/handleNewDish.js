import React from "react";
import NewDishForm from "./NewDishForm";
import axios from "axios";

class HandleNewDish extends React.Component {
  state = {
    dishName: "",
    type: "",
    dishImg: "something",
    cuisine_id: 8,
    labels: [],
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedQuantity: 3,
    description: "",
    timeframe: "10-4",
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

  // componentDidMount() {
  //   this.props.getAllCuisines();
  // }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value + e.target.name);
  };

  handleToGo = e => {
    e.preventDefault();
    this.setState({
      type: "pick-up"
    });
  };

  handleDateChange = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleSitDown = e => {
    e.preventDefault();
    this.setState({
      type: "sit-down"
    });
  };

  render() {
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
          handleSitDown={this.handleSitDown}
          handleToGo={this.handleToGo}
          handleDateChange={this.handleDateChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default HandleNewDish;

//

// date={date}
// selectedQuantity={selectedQuantity}

// handleClick={this.handleClick}
// description={description}
// timeframe={timeframe}
