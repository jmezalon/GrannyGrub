import React from "react";
import { Link } from "react-router-dom";

import UserPortal from "./userPortal";
import CookPortal from "./cookPortal";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="landingPage">
          <h1> Welcome to GrannyGrub! </h1>
          <img
            src="https://cdn.dribbble.com/users/28275/screenshots/5369506/shostudio_grandma-1.gif"
            alt="granny being cute"
            id="lpImg"
          />
          <div>
            <Link to="/mainpage">
              <button> get a taste </button>
            </Link>
          </div>
          <UserPortal />
          <CookPortal />
        </div>
      </>
    );
  }
}

export default LandingPage;
