import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  componentDidMount() {
    let id = parseInt(this.props.user.id);
    this.props.getOneGrandma(id);
  }

  render() {
    return (
      <div className="grandma-dash">
        <img
          id="granny-view-granny-pic"
          alt=""
          src={
            this.props.user
              ? this.props.user.profile_pic
              : "http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png"
          }
        />
        <div className="info-box">
          <p>Your Info</p>
          <label htmlFor="full Name">Full Name</label>
          <h1>
            {this.props.user.first_name} {this.props.user.last_name}
          </h1>
          <label htmlFor="contact">Contact</label>
          <p>{this.props.user.email}</p>
          <p>{this.props.user.phone_number}</p>
          <label htmlFor="address">address</label>
          <h6>
            {this.props.user.building_number} {this.props.user.address}{" "}
            {this.props.user.zip_code}
          </h6>
          <label htmlFor="bio">Bio</label>
          <p>{this.props.user.bio}</p>
        </div>
        <div className="edit-page">
          <Link to={`/grandma/edit/${this.props.user.id}`}>
            <input type="button" value="edit" />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
