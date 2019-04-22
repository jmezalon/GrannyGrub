import React from "react";
import { Link, withRouter } from "react-router-dom";

class GrandmasDishes extends React.Component {
  render() {
    const { type } = this.props;
    // console.log(this.props.dishes);

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
