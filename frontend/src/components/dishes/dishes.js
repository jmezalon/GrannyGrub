import React from "react";
import { withRouter, Link } from "react-router-dom";

class GrandmasDishes extends React.Component {
  handleDeleteDish = (dish_id, grannyId) => {
    this.props.deleteDish(dish_id, grannyId);
    // this.props.history.push(`/grandma/${this.props.id}/dashboard`);
  };

  render() {
    let grannyId = parseInt(this.props.match.params.id);

    let grannyDishDisplay = this.props.dishes.map(dish => {
      return (
        <div className="granny-dish-display" key={dish.dish_id}>
          <div id="time-date-div">
            <p> Meal type: {dish.type} dish </p>
            <p>Set For: {dish.timeframe} time </p>
            <p id="dish-date"> On: {dish.date.slice(0, 10)} </p>
          </div>

          <div id="granny-dish-header">
            <h3> {dish.name}</h3>
            <p> ${dish.price} </p>
          </div>

          <div className="dish-quantity">
            <p className="remaining-quantity">
              {dish.type === "pick-up"
                ? "Available Dishes:"
                : "Available Seats:"}{" "}
              {dish.remaining_quantity === null
                ? dish.quantity
                : dish.remaining_quantity}{" "}
              / {dish.quantity}{" "}
            </p>
          </div>

          <div className="granny-dish-info">
            <div id="right-side-img">
              <img src={dish.img_url} alt="dish" id="dish_img" />
              <p> {dish.description} </p>
            </div>

            <div id="dish-display-btns">
              <Link to={`/edit/newdish/${dish.dish_id}`}>
                <button className="dishBtns"> Edit Dish </button>
              </Link>

              <button
                onClick={e => {
                  window.confirm(
                    "Are you sure you wish to delete this dish?"
                  ) && this.handleDeleteDish(dish.dish_id, grannyId);
                }}
                className="dishBtns"
              >
                {" "}
                Delete dish
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div>{grannyDishDisplay}</div>
      </>
    );
  }
}

export default withRouter(GrandmasDishes);
