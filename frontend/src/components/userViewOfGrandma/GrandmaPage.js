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
    let { grandma } = this.props;

    let id = parseInt(this.props.match.params.id);
    if (!Object.values(grandma).length) return null;

    // if (dishes.length && !this.state.type) {
    //   this.setState({
    //     type: dishes[0].type
    //   });
    // }

    return (
      <div className="user-view-granny-page">
        <div className="top-granny-profile">
          <div className="back-btn">
            <Link to="/mainpage" id="back-link">
              <i className="fas fa-arrow-left" />
            </Link>
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

              <p> Specialty: {grandma.cuisine_type} Cuisine</p>
              <p>Quote: {grandma.bio}</p>

              {grandma.ispublic ? (
                <div>
                  <p> Phone number: {grandma.phone_number} </p>
                  <p> Email: {grandma.email} </p>
                  <p>Zip Code: {grandma.zip_code}</p>
                </div>
              ) : (
                <div>
                  <p> Email: {grandma.email} </p>
                  <p>Zip Code: {grandma.zip_code}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            {grandma.ispickup ? (
              <p className="grandma-delivery-type">
                Avialable For Pickup Or Delivery
              </p>
            ) : (
              <p className="grandma-delivery-type">Avaialable For Delivery</p>
            )}
          </div>
          <GrandmasDishes dishes={this.props.dishes} id={id} />
        </div>
      </div>
    );
  }
}

export default GrandmaPage;
