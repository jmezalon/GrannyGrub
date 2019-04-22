import React, { Component } from "react";
import axios from "axios";
import "../../css/userViewOfGrandma/GrandmaPage.css";
import GrandmasDishes from "../dishes/dishes";
class GrandmaPage extends Component {
  componentDidMount = () => {
    let id = parseInt(this.props.match.params.id);
    this.props.getOneGrandma(id);
    this.props.getGrandmasDishes(id);
  };

  render() {
    let id = parseInt(this.props.match.params.id);

    let { grandma } = this.props;
    if (!Object.values(grandma).length) return null;
    console.log(grandma);
    let grannyId = this.props.match.params.id;
    return (
      <div className="user-view-granny-page">
        <button>Pickup</button>
        <button>Takeout</button>
        <div>
          <GrandmasDishes dishes={this.props.dishes} />
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
