import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

class Navbar extends Component {
  render() {
    // const { loggedIn } = this.props;
    // console.log(this.props);
    return (
      <div className="navbar-parent">
        <div className="logo-div" onClick={this.props.handleGetATasteReset}>
          <NavLink to="/">
            <img id="logo" alt="" src={logo} />
          </NavLink>
        </div>
        {this.props.isOrdering ? (
          <div className="middle-options">
            <NavLink to="/auth/signup">
              <h1>create an account</h1>
            </NavLink>
            <NavLink to="/about">
              <h1>About us</h1>
            </NavLink>
          </div>
        ) : (
          <div id="grandma-navbar">
            {this.props.location.pathname === "/" ? (
              <Link to="/auth/signup">
                <h1>Become a granny</h1>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
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
export default withRouter(Navbar);
