import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import GrandmasDishes from "../dishes/dishes";
import Orders from "./grandmaOrders";

class Dashboard extends Component {
  // state = {
  //   newGrandma: false
  // };

  componentWillMount() {
    this.props.getOneGrandma(this.props.id);
    // if (!this.props.hasOrder) {
    this.props.getGrandmasDishes(this.props.id);
    this.props.getAllOrdersForGrandma(this.props.id);
    // }
  }
  // <GrannyNavbar id={this.props.id} />
  render() {
    // console.log(this.props.id);
    return (
      <>
        <div className="grandma-dash">
          <div className="granny_profile-sidebar">
            <div className="contact-name">
              <label htmlFor="full Name" />
              <h1>
                {this.props.grandma.first_name} {this.props.grandma.last_name}
              </h1>
            </div>
            <img
              id="granny-view-granny-pic"
              alt=""
              src={
                this.props.grandma.profile_pic
                  ? this.props.grandma.profile_pic
                  : "http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png"
              }
            />
            <div className="info-box">
              <p>Your Info</p>
              <label htmlFor="contact" />
              <p>{this.props.grandma.email}</p>
              <p>{this.props.grandma.phone_number}</p>
              <label htmlFor="address" />
              <h6>
                {this.props.grandma.building_number}{" "}
                {this.props.grandma.address} {this.props.grandma.zip_code}
              </h6>
              <label htmlFor="bio" />
              <p>{this.props.grandma.bio}</p>
            </div>
            <div className="edit-page">
              <Link to={`/grandma/edit/${this.props.id}`}>
                <input type="button" value="edit" />
              </Link>
            </div>
          </div>
          <div>
            <Orders hasOrder={this.props.hasOrder} orders={this.props.orders} />
          </div>

          <div className="granny_dishes">
            <h2>Your current offerings:</h2>
            <GrandmasDishes
              deleteDish={this.props.deleteDish}
              dishes={this.props.dishes}
            />
            <div className="addNew-page">
              <Link to={`/grandma/newdish`}>
                <input type="button" value="Add a new dish!" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dashboard);

// <button
// onClick={() =>
//   this.props
//   .logoutUser()
//   .then(() => this.props.history.push("/auth/login"))
// }
// >
// {" "}
// logout{" "}
// </button>
