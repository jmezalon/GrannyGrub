import React from "react";
import NewDishForm from "./NewDishForm";

class HandleNewDish extends React.Component {
  state = {
    dishName: "",
    sitDown: null,
    type: "",
    // dishImg: "",
    // cuisine_type: "",
    // labels: [],
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // selectedQuantity: "",
    // description: "",
    // timeframe: "",
    // date: ""
  };

  // componentDidMount() {
  //   this.props.getAllCuisines();
  // }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleToGo = e => {
    e.preventDefault();
    this.setState({
      type: "pick-up"
    });
    console.log(this.state.pickUp);
  };

  handleSitDown = e => {
    e.preventDefault();
    this.setState({
      type: "sit-down"
    });
    console.log(this.state.sitDown);
  };

  render() {
    const {
      dishName,
      quantity,
      type,
      selectedQuantity,
      handleSitDown,
      handleToGo
    } = this.state;

    return (
      <>
        <NewDishForm
          dishName={dishName}
          quantity={quantity}
          type={type}
          selectedQuantity={selectedQuantity}
          handleChange={this.handleChange}
          handleSitDown={this.handleSitDown}
          handleToGo={this.handleToGo}
        />
      </>
    );
  }
}

export default HandleNewDish;

//
// sitDown,
// dishImg,
// cuisine_type,
// labels,
// quantity,
// selectedQuantity,
// description,
// timeframe,
// pickUp,
// date

// date={date}
// selectedQuantity={selectedQuantity}

// handleClick={this.handleClick}
// description={description}
// timeframe={timeframe}

// dishImg={dishImg}
// cuisine_type={cuisine_type}
