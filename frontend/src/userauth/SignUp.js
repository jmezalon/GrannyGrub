import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  componentDidMount() {
    this.props.getAllCuisines();
  }

  render() {
    const {
      handleRegisterUser,
      handleChange,
      handleSelect,
      cuisines
    } = this.props;

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

    const cuisineTypes = cuisines.map(cuisine => {
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
          <form className="signup-form" onSubmit={handleRegisterUser}>
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
              <Link to="/auth/login">
                <p>Log in</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
