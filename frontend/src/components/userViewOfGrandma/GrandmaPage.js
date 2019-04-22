import React, { Component } from "react";
import axios from "axios";
import "../../css/userViewOfGrandma/GrandmaPage.css";
import GrandmasDishes from "../dishes/dishesUserView";

class GrandmaPage extends Component {
  state = {
    type: "pick-up"
  };

  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    this.props.getOneGrandma(id);
    this.props.getGrandmasDishes(id);
  }

  handleTypeToggle = e => {
    this.setState({
      type: e.target.value
    });
  };

  render() {
    console.log(this.state.type);
    let { grandma } = this.props;
    if (!Object.values(grandma).length) return null;

    let grannyId = this.props.match.params.id;

    return (
      <div className="user-view-granny-page">
        <label htmlFor="pick-up"> pickup </label>
        <input
          type="radio"
          name="type"
          value="pick-up"
          onChange={this.handleTypeToggle}
        />
        <label htmlFor="sit-down"> sitdown </label>
        <input
          type="radio"
          name="type"
          value="sit-down"
          onChange={this.handleTypeToggle}
        />

        <div>
          <GrandmasDishes dishes={this.props.dishes} type={this.state.type} />
        </div>

        <div className="profile-sidebar">
          <p>{grandma.first_name}</p>
          <img
            className="user-view-granny-pic"
            src={grandma.profile_pic}
            alt=""
          />
          <p>id: {grandma.user_id}</p>
          <p>cuisine type: {grandma.cuisine_type}</p>
          <p>bio: {grandma.bio}</p>
        </div>
      </div>
    );
  }
}

export default GrandmaPage;
