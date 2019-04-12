import React from "react";
import { Link } from "react-router-dom";

export const SignUp = ({
  handleChange,
  first_name,
  last_name,
  email,
  cuisine_type,
  building_number,
  address,
  zip_code,
  password,
  handleSignupSubmit
}) => {
  return (
    <div className="grandma-signup">
      <div className="signup-div">
        <h1>GrannyGrub</h1>
        <p>Where hungry New Yorkers are connected with professional Grandmas</p>
        <form className="signup-form" onSubmit={handleSignupSubmit}>
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
              id="cuisine-type"
              name="cuisine_type"
              onChange={handleChange}
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
            <button>Sign UP</button>
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
};
