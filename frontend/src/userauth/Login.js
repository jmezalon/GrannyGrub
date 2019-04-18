import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
<<<<<<< HEAD:frontend/src/userauth/Login.js
  // handleLoginSubmit = async e => {
  //   e.preventDefault();
  //   await this.props.loginUser(this.state.email, this.state.password);
  //
  //   await this.props.history.push(
  //     `/grandma/edit/${parseInt(this.props.user.id)}`
  //   );
  // };
=======
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginSubmit = async e => {
    e.preventDefault();
    await this.props.loginUser(this.state.email, this.state.password);

    await this.props.history.push(
      `/grandma/${parseInt(this.props.user.id)}/dashboard`
    );
  };
>>>>>>> master:frontend/src/components/grandma/Login.js

  render() {
    const { email, password, loginUser, handleChange } = this.props;

    return (
      <div className="grandma-login">
        <div className="login-div">
          <h1>GrannyGrub</h1>
          <p>
            Where hungry New Yorkers are connected with professional Grandmas
          </p>
          <form className="login-form" onSubmit={loginUser}>
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
              <Link to="/signup">
                <p>Sign up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
