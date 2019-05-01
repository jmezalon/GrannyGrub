import React, { Component } from "react";
import "../../css/userViewOfGrandma/GrandmaPage.css";
import GrandmasDishes from "../dishes/dishesUserView";

class GrandmaPage extends Component {
  state = {
    type: "",
    selectedDish: []
  };

  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    this.props.getOneGrandma(id);
    this.props.getGrandmasDishes(id);
  }

  render() {
    let { grandma, dishes } = this.props;

    let id = parseInt(this.props.match.params.id);
    if (!Object.values(grandma).length) return null;

    if (dishes.length && !this.state.type) {
      this.setState({
        type: dishes[0].type
      });
    }

    return (
      <div className="user-view-granny-page">
        <div>
          <GrandmasDishes
            dishes={this.props.dishes}
            type={this.state.type}
            handleClick={this.handleClick}
            setSelectedDish={this.props.setSelectedDish}
            getGrandmasDishes={this.props.getGrandmasDishes}
            id={id}
          />
        </div>

        <div className="profile-sidebar">
          <p> Granny {grandma.first_name}</p>
          <img
            className="user-view-granny-pic"
            src={grandma.profile_pic}
            alt=""
          />
          <p>cuisine type: {grandma.cuisine_type}</p>
          <p>bio: {grandma.bio}</p>
          {grandma.ispublic ? (
            <div>
              <p> Phone number: {grandma.phone_number} </p>
              <p> Email: {grandma.email} </p>
              <p>{grandma.zip_code}</p>
            </div>
          ) : (
            <p>{grandma.zip_code}</p>
          )}
        </div>
      </div>
    );
  }
}

export default GrandmaPage;
