import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

class Navbar extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="navbar-parent">
        <div className="logo-div">
          <NavLink to="/">
            <img id="logo" alt="" src={logo} />
          </NavLink>
        </div>
        <div className="middle-options">
          <NavLink to="/grandma/main">Granny main</NavLink>
          <NavLink to={`/grandma/edit/${parseInt(this.props.user.id)}`}>
            edit profile
          </NavLink>
          <NavLink to={`/grandma/${parseInt(this.props.user.id)}/dashboard`}>
            dashboard
          </NavLink>
          <NavLink to="/grandma/newdish">new dish</NavLink>
          <NavLink to="/grandma/5">user view of grandma</NavLink>
          <NavLink to="/mainpage">Main Page</NavLink>
          <NavLink to="/grandma/5/order">order</NavLink>
        </div>
      </div>
      //
      // {loggedIn ? (
      //   <>
      //     <div className="middle-options">
      //       <NavLink to="/brooklyn">Brooklyn</NavLink>
      //       <NavLink to="/queens">Queens</NavLink>
      //       <NavLink to="/manhattan">Manhattan</NavLink>
      //       <NavLink to="/bronx">Bronx</NavLink>
      //       <NavLink to="/statenisland">Staten Island</NavLink>
      //       <div id="Logout">
      //         <NavLink to="/">Log Out</NavLink>
      //       </div>
      //     </div>
      //   </>
      // ) : (
      //   <div className="auth-div">
      //     <NavLink to="/auth/signup">Sign Up</NavLink>{" "}
      //     <NavLink to="/auth/login">Log In</NavLink>
      //   </div>
      // )}
      //
    );
  }
}

export default withRouter(Navbar);
