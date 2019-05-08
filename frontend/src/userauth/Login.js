import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    const { email, password, handleLogin, handleChange } = this.props;

    return (
      <div className="grandma-signup">
        <div className="side-signup">
          <h1>GrannyGrub</h1>
          <p>
            Where hungry New Yorkers are connected with professional Grandmas
          </p>
        </div>
        <div className="signup-div">
          <div className="signup-login">
            <div id={!this.props.zip_code ? "signup" : "login"}>
              <Link to="/auth/signup">
                <h1>Login</h1>
              </Link>
            </div>
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <div>
              <label for="email">
                <b>Email: </b>
              </label>{" "}
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
                type="text"
              />
            </div>
            <div>
              <label for="password">
                <b>Password: </b>
              </label>{" "}
              <input
                id="password"
                name="password"
                onChange={handleChange}
                value={password}
                type="password"
              />
            </div>
            <div className="toggle-signup">
              <button id="continue-button">Continue</button>
              <br />
              <br />
              <p id="switch-p2">Do you want to cook?</p>
              <Link to="/auth/signup">
                <button id="signup-buttons">Sign up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
