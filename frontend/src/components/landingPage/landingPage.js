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
          <div className="middle-landing">
            <div className="middle-landing-left">
              <div className="aboutUs">
                <h3>About us</h3>
                <p>
                  Giving New Yorkers authentic home made taste that only comes
                  from years of wisdom and experience. Our Grannies offer dishes
                  that you won’t find elsewhere. We are confident that these are
                  some of the best meals you’ll ever have.
                </p>
              </div>
              <div>
                <Link to="/mainpage">
                  <button
                    id="taste-button"
                    onClick={this.props.handleGetATaste}
                  >
                    {" "}
                    Get a taste{" "}
                  </button>
                </Link>
              </div>
              <CookPortal />
            </div>
            <img
              src="https://cdn.dribbble.com/users/28275/screenshots/5369506/shostudio_grandma-1.gif"
              alt="granny being cute"
              id="lpImg"
            />
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
