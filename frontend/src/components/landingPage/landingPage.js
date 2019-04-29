import React from "react";
import { Link } from "react-router-dom";
import "../../css/Landingpage.css";

import UserPortal from "./userPortal";
import CookPortal from "./cookPortal";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="landingPage">
          <div className="topLanding">
            <div className="info-button">
              <p>Home cooked meal, unique experience</p>
              <h1> grannygrub </h1>
              <div>
                <Link to="/mainpage">
                  <button id="taste-button"> Get started now </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="middle-landing">
            <div className="middle-landing-left">
              <h1>Authentic experience</h1>
              <p>
                Giving Newyorkers, authentic home made tastes that only comes
                from years of wisdom and experience. Our grannys offer dishes
                that you won’t find elsewhere.
              </p>
            </div>
            <div className="middle-landing-right">
              <h3>Food, folks and fun!</h3>
              <p>Plan an event in a grandma place or order a deliciouse food</p>
              <Link to="/mainpage">
                <button id="taste-button2"> Get started now </button>
              </Link>
            </div>
          </div>
          <div className="footer" />
        </div>
      </>
    );
  }
}

export default LandingPage;
