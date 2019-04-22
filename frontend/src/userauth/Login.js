import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    const { email, password, handleLogin, handleChange } = this.props;

    return (
      <div className="grandma-login">
        <div className="login-div">
          <h1>GrannyGrub</h1>
          <p>
            Where hungry New Yorkers are connected with professional Grandmas
          </p>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="">
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
                placeholder="EMAIL"
                type="text"
              />
            </div>

            <div className="">
              <input
                id="password"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="toggle-signup">
              <button>Login</button>
              <br />
              <br />
              <p>Do you want to cook?</p>
              <Link to="/auth/signup">
                <p>Sign up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
