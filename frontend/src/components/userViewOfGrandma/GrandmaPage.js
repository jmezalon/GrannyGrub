import React, { Component } from "react";
import axios from "axios";
import "../../css/userViewOfGrandma/GrandmaPage.css";

class GrandmaPage extends Component {
  componentDidMount = () => {
    let id = parseInt(this.props.match.params.id);
    this.props.getOneGrandma(id);
  };
  render() {
    let { grandma } = this.props;
    if (!Object.values(grandma).length) return null;
    console.log(grandma);
    let grannyId = this.props.match.params.id;
    return (
      <div className="user-view-granny-page">
        <div className="menu-view">
          //these buttons should eventually toggle type of
          //orders(pickup/sitdown) granny offers
          <button>Pickup</button>
          <button>Takeout</button>
          <div>
            Dish 1 <button>order</button>
          </div>
          <div>
            Dish 2 <button>order</button>
          </div>
          <div>
            Dish 3 <button>order</button>
          </div>
          <div>
            Dish 4 <button>order</button>
          </div>
        </div>
        <div className="profile-sidebar">
          <p>{grandma.first_name}</p>
          <img
            className="user-view-granny-pic"
            src={grandma.profile_pic}
            alt=""
          />
          <p>id: {grandma.user_id}</p>
          <p>name: {grandma.cuisine_type}</p>
          <p>bio: {grandma.bio}</p>
        </div>
      </div>
    );
  }
}

export default GrandmaPage;
