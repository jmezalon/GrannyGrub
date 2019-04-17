import React from "react";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    isGrandma: true,
    cuisine_type: "",
    building_number: "",
    address: "",
    zip_code: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    this.props
      .signUpUser({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        isGrandma: true,
        building_number: parseInt(this.state.building_number),
        address: this.state.address,
        zip_code: parseInt(this.state.zip_code),
        password: this.state.password
      })
      .then(res => this.props.loginUser(this.state.email, this.state.password))
      .then(res =>
        this.props.history.push(`/grandma/edit/${parseInt(this.props.user.id)}`)
      );
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      cuisine_type,
      building_number,
      address,
      zip_code,
      password
    } = this.state;

    return (
      <div className="grandma-signup">
        <div className="signup-div">
          <h1>GrannyGrub</h1>
          <p>
            Where hungry New Yorkers are connected with professional Grandmas
          </p>
          <form className="signup-form" onSubmit={this.handleSignupSubmit}>
            <div className="">
              <input
                id="first-name"
                name="first_name"
                onChange={this.handleChange}
                placeholder="First Name"
                type="text"
                value={first_name}
              />
            </div>
            <div className="">
              <input
                id="last-name"
                name="last_name"
                onChange={this.handleChange}
                placeholder="Last Name"
                type="text"
                value={last_name}
              />
            </div>
            <div className="">
              <input
                id="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                placeholder="EMAIL"
                type="text"
              />
            </div>
            <div className="">
              <input
                id="phone_number"
                name="phone_number"
                onChange={this.handleChange}
                value={phone_number}
                placeholder="Phone Number"
                type="text"
              />
            </div>
            <div className="">
              <input
                id="cuisine-type"
                name="cuisine_type"
                onChange={this.handleChange}
                value={cuisine_type}
                placeholder="Type of cuisine"
                type="text"
              />
            </div>
            <div className="address">
              <span>
                <input
                  id="building-number"
                  name="building_number"
                  onChange={this.handleChange}
                  value={building_number}
                  placeholder="building number"
                  type="text"
                />
              </span>
              <span>
                <input
                  id="street-adress"
                  name="address"
                  onChange={this.handleChange}
                  value={address}
                  placeholder="street"
                  type="text"
                />
              </span>
              <span>
                <input
                  id="zip-code"
                  name="zip_code"
                  onChange={this.handleChange}
                  value={zip_code}
                  placeholder="Zip code"
                  type="text"
                />
              </span>
            </div>
            <div className="">
              <input
                id="password"
                name="password"
                onChange={this.handleChange}
                value={password}
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="toggle-login">
              <button>Sign up</button>
              <br />
              <br />
              <p>already have an account?</p>
              <Link to="/login">
                <p>Log in</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
