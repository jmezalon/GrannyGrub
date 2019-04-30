import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

class GrannyNavbar extends Component {
  render() {
    return (
      <div className="navbar-parent">
        <div className="logo-div" onClick={this.props.handleGetATasteReset}>
          <NavLink to={`/grandma/${parseInt(this.props.id)}/dashboard`}>
            <img id="logo" alt="" src={logo} />
          </NavLink>
        </div>
        <div className="middle-options">
          <NavLink to={`/grandma/${parseInt(this.props.id)}/dashboard`}>
            Dashboard
          </NavLink>

          <NavLink to={`/grandma/edit/${parseInt(this.props.id)}`}>
            Edit Profile
          </NavLink>
          <NavLink to="/grandma/newdish">New Dish</NavLink>
        </div>
        <div className="logout-div" onClick={() => this.props.logoutUser()}>
          <NavLink to="/">
            <button id="logout-button">Log out</button>
          </NavLink>
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

//
export default withRouter(GrannyNavbar);
