import React from "react";
import NewDishForm from "./NewDishForm";

class HandleNewDish extends React.Component {
  state = {
    dishName: "",
    sitDown: false,
    pickUp: false,
    dishImg: "",
    cuisine_type: "",
    labels: [],
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedQuantity: "",
    description: "",
    timeframe: "",
    date: ""
  };

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    const {
      dishName,
      sitDown,
      dishImg,
      cuisine_type,
      labels,
      quantity,
      selectedQuantity,
      description,
      timeframe,
      pickUp,
      date
    } = this.state;

    return (
      <>
        <NewDishForm
          dishName={dishName}
          sitDown={sitDown}
          pickUp={pickUp}
          dishImg={dishImg}
          cuisine_type={cuisine_type}
          quantity={quantity}
          description={description}
          timeframe={timeframe}
          date={date}
          selectedQuantity={selectedQuantity}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default HandleNewDish;
