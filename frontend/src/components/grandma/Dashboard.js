import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import GrandmasDishes from "../dishes/dishes";

class Dashboard extends Component {
  componentWillMount() {
    // let id = parseInt(this.props.user.id);
    this.props.getOneGrandma(this.props.id);
    this.props.getGrandmasDishes(parseInt(this.props.id));
  }

  render() {
    // console.log(this.props.id);
    return (
      <div className="grandma-dash">
        <div className="granny_profile-sidebar">
          <div className="contact-name">
            <label htmlFor="full Name" />
            <h1>
              {this.props.user.first_name} {this.props.user.last_name}
            </h1>
          </div>
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
            <label htmlFor="contact" />
            <p>{this.props.user.email}</p>
            <p>{this.props.user.phone_number}</p>
            <label htmlFor="address" />
            <h6>
              {this.props.user.building_number} {this.props.user.address}{" "}
              {this.props.user.zip_code}
            </h6>
            <label htmlFor="bio" />
            <p>{this.props.user.bio}</p>
          </div>
          <div className="edit-page">
            <Link to={`/grandma/edit/${this.props.id}`}>
              <input type="button" value="edit" />
            </Link>
          </div>

          <button
            onClick={() =>
              this.props
                .logoutUser()
                .then(() => this.props.history.push("/auth/login"))
            }
          >
            {" "}
            logout{" "}
          </button>
        </div>
        <div className="granny_dishes">
          <h2>Your current offerings:</h2>
          <GrandmasDishes dishes={this.props.dishes} />
          <div className="addNew-page">
            <Link to={`/grandma/newdish`}>
              <input type="button" value="Add a new dish!" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
