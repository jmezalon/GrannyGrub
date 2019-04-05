import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-parent">
        <nav>
          <div className="logo-div">
            <NavLink to="/">Logo</NavLink>{" "}
          </div>
        </nav>

        <nav>
          <div
            className={
              this.props.location.pathname !== "/"
                ? "links-in-middle"
                : "links-in-middle-null"
            }
          >
            <NavLink to="/brooklyn">Brooklyn</NavLink>{" "}
            <NavLink to="/queens">Queens</NavLink>{" "}
            <NavLink to="/manhattan">Manhattan</NavLink>{" "}
            <NavLink to="/bronx">Bronx</NavLink>{" "}
            <NavLink to="/statenisland">Staten Island</NavLink>{" "}
          </div>
        </nav>

        <nav>
          <div className="auth-div">
            <NavLink to="/auth/signup">Sign Up</NavLink>{" "}
            <NavLink to="/auth/login">Log In</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
