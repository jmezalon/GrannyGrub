import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <div className="top-granny-profile">
          <div className="back-btn">
            <button>
              <Link to="/mainpage" id="back-link">
                back to grandmas
              </Link>
            </button>
          </div>
          <div className="granny-profile-display">
            <div id="granny-img">
              <img
                className="user-view-granny-pic"
                src={grandma.profile_pic}
                alt=""
              />
            </div>

            <div id="main-info">
              <h3 id="granny_name"> Granny {grandma.first_name}</h3>

              <p> Granny's Specialty: {grandma.cuisine_type} Cuisine</p>
              <p>
                A little about granny {grandma.first_name}: {grandma.bio}
              </p>

              {grandma.ispublic ? (
                <div>
                  <p> Phone number: {grandma.phone_number} </p>
                  <p> Email: {grandma.email} </p>
                  <p>{grandma.zip_code}</p>
                </div>
              ) : (
                <div>
                  <p> Email: {grandma.email} </p>
                  <p>{grandma.zip_code}</p>
                </div>
              )}
            </div>
          </div>
        </div>
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
      </div>
    );
  }
}

export default GrandmaPage;
