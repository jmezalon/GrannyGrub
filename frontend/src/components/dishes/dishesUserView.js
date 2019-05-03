import React from "react";
import { withRouter } from "react-router-dom";
import DishList from "./dishList";

class GrandmasDishes extends React.Component {
  state = {
    sitdowndisplay: true
  };

  componentDidMount = () => {
    const resultDishes = this.filterDishes();
    if (!resultDishes.length) {
      this.setState({
        sitdowndisplay: false
      });
    }
  };

  filterDishes = () => {
    const filteredDishes = this.props.dishes.filter(dish => {
      // return (i.key = i);
      if (this.state.sitdowndisplay) {
        return dish.type === "sit-down";
      } else {
        return dish.type === "pick-up";
      }
    });

    return filteredDishes;
  };

  handleTypeToggle = e => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        type: value,
        sitdowndisplay: !prevState.sitdowndisplay
      };
    });
  };

  render() {
    const resultDishes = this.filterDishes();
    return (
      <>
        <div id="dish-btns-container">
          <label htmlFor="pick-up" />
          <button
            name="type"
            value="pick-up"
            onChange={this.handleTypeToggle}
            checked={!this.state.sitdowndisplay}
            className={
              !this.state.sitdowndisplay ? "filter-btn-selected" : "filter-btn"
            }
          >
            {" "}
            Pick Up{" "}
          </button>
          <label htmlFor="sit-down" />
          <button
            name="type"
            value="sit-down"
            onChange={this.handleTypeToggle}
            checked={this.state.sitdowndisplay}
            className={
              this.state.sitdowndisplay ? "filter-btn-selected" : "filter-btn"
            }
          >
            Sit Down{" "}
          </button>
        </div>
        <div id="dish-display-main">
          <DishList
            dishes={resultDishes}
            handleClick={this.props.handleClick}
          />
        </div>
      </>
    );
  }
}

export default withRouter(GrandmasDishes);
