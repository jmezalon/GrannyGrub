import React from "react";

class GrandmasDishes extends React.Component {
  componentDidMount() {
    this.props.getGrandmasDishes();
  }

  render() {
    let dishDisplay = this.props.dishes.dishes.map(dish => {
      return (
        <div key={dish.dish_id}>
          <h3> name:{dish.name}</h3>
          <img src={dish.img_url} alt="dish" />
          <p> {dish.description} </p>
          <p> ${dish.price} </p>
          <p> {dish.type} </p>
          <p>timefrmae: {dish.timeframe} </p>
        </div>
      );
    });
    return (
      <>
        <h1>Dishes</h1>
        {dishDisplay}
      </>
    );
  }
}

export default GrandmasDishes;
