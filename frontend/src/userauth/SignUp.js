import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import { getAllCuisines } from "../actions/cuisineActions";

const mapStateToProps = state => {
  return {
    cuisines: state.cuisines.cuisines
  };
};

<<<<<<< HEAD:frontend/src/userauth/SignUp.js
const mapDispatchToProps = dispatch => {
  return {
    getAllCuisines: () => dispatch(getAllCuisines())
=======
  handleSignupSubmit = async e => {
    e.preventDefault();
    await this.props.signUpUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      isGrandma: true,
      building_number: parseInt(this.state.building_number),
      address: this.state.address,
      zip_code: parseInt(this.state.zip_code),
      password: this.state.password
    });
    await this.props.loginUser(this.state.email, this.state.password);
    await this.props.history.push(
      `/grandma/${parseInt(this.props.user.id)}/dashboard`
    );
>>>>>>> master:frontend/src/components/grandma/SignUp.js
  };
};

class SignUp extends React.Component {
  componentDidMount() {
    this.props.getAllCuisines();
  }

  // handleSignupSubmit = e => {
  //   e.preventDefault();
  //   this.props
  //     .registerUser()
  //     .then(res => this.props.loginUser(this.state.email, this.state.password))
  //     .then(res =>
  //       this.props.history.push(`/grandma/edit/${parseInt(this.props.user.id)}`)
  //     );
  // };

  render() {
    console.log("sign up page!");

    const { registerUser, handleChange, handleSelect } = this.props;

    const {
      first_name,
      last_name,
      email,
      phone_number,
      cuisine_id,
      building_number,
      address,
      zip_code,
      password
    } = this.props;

    const cuisineTypes = this.props.cuisines.map(cuisine => {
      return (
        <option key={cuisine.id} value={cuisine.id}>
          {cuisine.type}
        </option>
      );
    });

    return (
      <div className="grandma-signup">
        <div className="signup-div">
          <h1>GrannyGrub</h1>
          <p>
            Where hungry New Yorkers are connected with professional Grandmas
          </p>
          <form className="signup-form" onSubmit={registerUser}>
            <div className="">
              <input
                id="first-name"
                name="first_name"
                onChange={handleChange}
                placeholder="First Name"
                type="text"
                value={first_name}
              />
            </div>
            <div className="">
              <input
                id="last-name"
                name="last_name"
                onChange={handleChange}
                placeholder="Last Name"
                type="text"
                value={last_name}
              />
            </div>
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
                id="phone_number"
                name="phone_number"
                onChange={handleChange}
                value={phone_number}
                placeholder="Phone Number"
                type="text"
              />
            </div>
            <div className="">
              <select onChange={handleSelect}>
                <option key="0" value="">
                  select a cuisines
                </option>
                {cuisineTypes}
              </select>
            </div>

            <div className="address">
              <span>
                <input
                  id="building-number"
                  name="building_number"
                  onChange={handleChange}
                  value={building_number}
                  placeholder="building number"
                  type="text"
                />
              </span>
              <span>
                <input
                  id="street-adress"
                  name="address"
                  onChange={handleChange}
                  value={address}
                  placeholder="street"
                  type="text"
                />
              </span>
              <span>
                <input
                  id="zip-code"
                  name="zip_code"
                  onChange={handleChange}
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
                onChange={handleChange}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
