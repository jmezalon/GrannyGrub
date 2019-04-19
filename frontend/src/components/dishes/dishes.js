import React from "react";

class GrandmasDishes extends React.Component {
  // componentDidMount() {
  //   this.props.getGrandmasDishes();
  // }

  render() {
    let dishDisplay = this.props.dishes.dishes.map(dish => {
      return (
        <div className="dish-view" key={dish.dish_id}>
          <h3> {dish.name}</h3>
          <img src={dish.img_url} alt="dish" id="dish_img" />
          <p> {dish.description} </p>
          <p> ${dish.price} </p>
          <p> Meal type: {dish.type} </p>
          <p>timefrmae: {dish.timeframe} </p>
        </div>
      );
    });
    return (
      <>
        <div className="dish-display">{dishDisplay}</div>
      </>
    );
  }
}

export default GrandmasDishes;
