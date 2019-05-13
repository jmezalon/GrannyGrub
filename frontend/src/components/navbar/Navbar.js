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

        {this.props.location.pathname === "/mainpage" ? (
          <div id="right-nav">
            <div className="middle-options">
              <NavLink to="/auth/signup">
                <h1 onClick={this.props.handleUserSignUpType}>
                  create a user account
                </h1>
              </NavLink>
              <NavLink to="/about">
                <h1>About us</h1>
              </NavLink>
              <NavLink to="/">
                <h1>Home</h1>
              </NavLink>
            </div>
          </div>
        ) : (
          <div id="right-nav">
            {this.props.location.pathname === "/" ? (
              <div className="middle-options">
                <Link to="/auth/signup">
                  <h1 onClick={this.props.handleUserSignUpType2}>
                    Become a granny
                  </h1>
                </Link>
                <NavLink to="/about">
                  <h1>About us</h1>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/">
                <h1>Home</h1>
              </NavLink>
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
