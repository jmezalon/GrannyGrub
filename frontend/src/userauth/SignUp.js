import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  componentDidMount() {
    if (!this.props.isUser) {
      this.props.getAllCuisines();
    }
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
      isUser,
      isGrandma,
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
        <div className="side-signup">
          <h1>GrannyGrub</h1>
          <p>
            Where hungry New Yorkers are connected with professional Grandmas
          </p>
        </div>
        <div className="signup-div">
          <div className="signup-login">
            <div id={zip_code ? "login" : "signup"}>
              <Link to="/auth/login">
                <h1>Sign up for {isGrandma ? " Grandma" : " User"}</h1>
              </Link>
            </div>
          </div>

          <form className="signup-form" onSubmit={handleRegisterUser}>
            <div className="full-name">
              <label for="first-name">
                <b>First name: </b>
              </label>{" "}
              <input
                id="first-name"
                name="first_name"
                onChange={handleChange}
                type="text"
                value={first_name}
              />
              <label for="last-name">
                <b>Last name: </b>
              </label>{" "}
              <input
                id="last-name"
                name="last_name"
                onChange={handleChange}
                type="text"
                value={last_name}
              />
            </div>

            <div className="contact-info">
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
              <label for="phone-number">
                <b>Phone number: </b>
              </label>{" "}
              <input
                id="phone_number"
                name="phone_number"
                onChange={handleChange}
                value={phone_number}
                type="text"
              />
            </div>

            {isGrandma ? (
              <div>
                <label for="cuisine">
                  <b>Cuisines selection: </b>
                </label>{" "}
                <div className="cuisine-selection">
                  <select onChange={handleSelect}>
                    <option key="0" value="">
                      select a cuisines
                    </option>
                    {cuisineTypes}
                  </select>
                </div>
                <div className="address">
                  <label for="address">
                    <b>address: </b>
                  </label>{" "}
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
              </div>
            ) : (
              ""
            )}
            <div className="">
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

            <div className="toggle-login">
              <button id="continue-button">Continue</button>

              <br />
              <br />

              <p id="switch-p">already have an account?</p>
              <Link to="/auth/login">
                <button id="signup-buttons">Log in</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
