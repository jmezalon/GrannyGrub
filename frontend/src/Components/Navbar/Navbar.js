import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const divStyle = {
      color: "red",
      textDecoration: "none"
    };
    return (
      <div className="navbar-parent">
        <nav style={divStyle}>
          <div className="logo-div">
            <NavLink to="/">Logo</NavLink>{" "}
          </div>
          <div className="links-in-middle">
            <NavLink to="/brooklyn">Brooklyn</NavLink>{" "}
            <NavLink to="/queens">Queens</NavLink>{" "}
            <NavLink to="/manhattan">Manhattan</NavLink>{" "}
            <NavLink to="/bronx">Bronx</NavLink>{" "}
            <NavLink to="/statenisland">Staten Island</NavLink>{" "}
          </div>
          <div className="auth-div">
            <NavLink to="/auth/signup">Sign Up</NavLink>{" "}
            <NavLink to="/auth/login">Log In</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
