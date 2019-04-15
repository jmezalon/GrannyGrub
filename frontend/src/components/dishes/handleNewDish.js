import React from "react";
import NewDishForm from "./NewDishForm";

class HandleNewDish extends React.Component {
  state = {
    dishName: "",
    // sitDown: false,
    // pickUp: false,
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

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    const { dishName, quantity, selectedQuantity } = this.state;

    return (
      <>
        <NewDishForm
          dishName={dishName}
          quantity={quantity}
          selectedQuantity={selectedQuantity}
          handleChange={this.handleChange}
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
// sitDown={sitDown}
// pickUp={pickUp}
// dishImg={dishImg}
// cuisine_type={cuisine_type}
