import React from "react";
import { withRouter, Link } from "react-router-dom";

class GrandmasDishes extends React.Component {
  // componentDidMount() {
  //   this.props.getGrandmasDishes(parseInt(this.props.id));
  // }
  //

  handleDeleteDish = (dish_id, grannyId) => {
    debugger;
    this.props.deleteDish(dish_id, grannyId);
    // this.props.history.push(`/grandma/${this.props.id}/dashboard`);
  };

  render() {
    // console.log("userid", this.props.id);
    console.log("dish page", this.props);
    let grannyId = parseInt(this.props.match.params.id);
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
            <Link to={`/edit/newdish/${dish.dish_id}`}>
              <button> edit </button>
            </Link>
          </div>
          <div className="time-date-div">
            <p>timefrmae: {dish.timeframe} </p>
            <p> date: {dish.date} </p>
          </div>
          <div>
            <button
              onClick={() => this.handleDeleteDish(dish.dish_id, grannyId)}
            >
              {" "}
              Delete dish{" "}
            </button>
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
