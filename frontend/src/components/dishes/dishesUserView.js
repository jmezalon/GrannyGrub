import React from "react";
import { Link, withRouter } from "react-router-dom";

class GrandmasDishes extends React.Component {
  render() {
    const { type, dishes } = this.props;
    // console.log(this.props.dishes, "dishes consolelog");

    if (!Object.values(dishes).length) {
      return (
        <div className="dish-view">
          <h3> This granny currently does not have any dishes to offer</h3>
          <h4> please checkback later </h4>
        </div>
      );
    }

    let grannyDishDisplay = this.props.dishes.map(dish => {
      if (dish.type === "sit-down" && type === "sit-down") {
        return (
          <div className="dish-view" key={dish.dish_id}>
            <div className="dishInfo">
              <h3> {dish.name}</h3>
              <img src={dish.img_url} alt="dish" id="dish_img" />
              <p> ${dish.price} </p>
              <p> Meal type: {dish.type} </p>
            </div>
            <Link to={`/grandma/${dish.dish_id}/order`}>
              <button
                onClick={() => this.props.handleChange({ dish })}
                value={dish}
              >
                {" "}
                book{" "}
              </button>
            </Link>
            <div className="time-date-div">
              <p>timefrmae: {dish.timeframe} </p>
              <p> date: {dish.date} </p>
            </div>
          </div>
        );
      } else if (dish.type === "pick-up" && type === "pick-up") {
        return (
          <div className="dish-view" key={dish.dish_id}>
            <div className="dishInfo">
              <h3> {dish.name}</h3>
              <img src={dish.img_url} alt="dish" id="dish_img" />
              <p> ${dish.price} </p>
              <p> Meal type: {dish.type} </p>
            </div>
            <div>
              <Link to={`/grandma/${dish.dish_id}/order`}>
                <button onClick={() => this.props.handleChange({ dish })}>
                  order{" "}
                </button>
              </Link>
            </div>
            <div className="time-date-div">
              <p>timefrmae: {dish.timeframe} </p>
              <p> date: {dish.date} </p>
            </div>
          </div>
        );
      } else if (!this.props.dishes) {
        return (
          <div>
            <p>
              this grandma currently has no offering, get in contact with her
              and recomment something to eat
            </p>
          </div>
        );
      }
    });
    return (
      <>
        <div className="dish-display">{grannyDishDisplay}</div>
      </>
    );
  }
}

export default withRouter(GrandmasDishes);
