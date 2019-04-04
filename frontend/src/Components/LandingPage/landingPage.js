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
            src="https://cdn5.eyeem.com/thumb/cedbeecf8be48ed904d400f4e3767e43c29d2c20-1516553584991/w/900"
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
