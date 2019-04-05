import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

class Navbar extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="navbar-parent">
        <nav>
          <div className="logo-div">
            <NavLink to="/">
              <img id="logo" alt="" src={logo} />
            </NavLink>{" "}
          </div>
        </nav>

        {loggedIn ? (
          <nav>
            <div>
              <NavLink to="/brooklyn">Brooklyn</NavLink>{" "}
              <NavLink to="/queens">Queens</NavLink>{" "}
              <NavLink to="/manhattan">Manhattan</NavLink>{" "}
              <NavLink to="/bronx">Bronx</NavLink>{" "}
              <NavLink to="/statenisland">Staten Island</NavLink>{" "}
              <NavLink to="/">Log Out</NavLink>
            </div>
          </nav>
        ) : (
          <nav>
            <div className="auth-div">
              <NavLink to="/auth/signup">Sign Up</NavLink>{" "}
              <NavLink to="/auth/login">Log In</NavLink>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
