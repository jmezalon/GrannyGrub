import React from "react";
import { withRouter } from "react-router";

class GrandmasDishes extends React.Component {
  // componentDidMount() {
  //   this.props.getGrandmasDishes(parseInt(this.props.id));
  // }

  render() {
    // console.log("userid", this.props.id);
    // console.log(this.props);
    let grannyDishDisplay = this.props.dishes.map(dish => {
      return (
        <div className="dish-view" key={dish.dish_id}>
          <div className="dishInfo">
            <h3> {dish.name}</h3>
            <img src={dish.img_url} alt="dish" id="dish_img" />
            <p> ${dish.price} </p>
            <p> Meal type: {dish.type} </p>
          </div>
          <div>
            <button> edit </button>
          </div>
          <div className="time-date-div">
            <p>timefrmae: {dish.timeframe} </p>
            <p> date: {dish.date} </p>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="dish-display">{grannyDishDisplay}</div>
      </>
    );
  }
}

export default withRouter(GrandmasDishes);
