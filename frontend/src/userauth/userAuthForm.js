import React from "react";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import Auth from "./utils/Auth";
import SignUp from "./SignUp";
import LogIn from "./Login";

class UserAuthForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    isGrandma: true,
    cuisine_id: "",
    building_number: "",
    address: "",
    zip_code: "",
    password: "",
    longitude: "",
    latitude: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelect = e => {
    e.preventDefault();
    this.setState({
      cuisine_id: e.target.value
    });
  };

  handleRegisterUser = async e => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      email,
      phone_number,
      isGrandma,
      cuisine_id,
      building_number,
      address,
      zip_code,
      password,
      longitude,
      latitude
    } = this.state;

    let coords = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${building_number}, ${address}, New York, ${zip_code}&key=AIzaSyAThAa2thsgXHfh-D09OkhewLe5VVAlhYs`
    );

    this.setState({
      longitude: coords.data.results[0].geometry.location.lng,
      latitude: coords.data.results[0].geometry.location.lat
    });

    let newUser = {
      first_name,
      last_name,
      email,
      phone_number,
      isGrandma,
      password,
      building_number,
      address,
      zip_code,
      cuisine_id,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    };

    const loginPrams = { email, password };

    this.props.registerUser(newUser, loginPrams);
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const loginPrams = { email, password };

    console.log("LOGIN", this.props.loginUser);

    await this.props.loginUser(loginPrams);
  };

  render() {
    if (this.props.id) {
      this.props.history.push(`/grandma/${this.props.id}/dashboard`);
    }

    const {
      first_name,
      last_name,
      email,
      phone_number,
      isGrandma,
      cuisine_id,
      building_number,
      address,
      zip_code,
      password,
      longitude,
      latitude
    } = this.state;

    return (
      <>
        <h1> user auth here </h1>

        <Switch>
          <Route
            path="/auth/login"
            render={() => {
              return (
                <LogIn
                  email={email}
                  password={password}
                  handleLogin={this.handleLogin}
                  handleChange={this.handleChange}
                />
              );
            }}
          />

          <Route
            path="/auth/signup"
            render={props => {
              return (
                <SignUp
                  {...props}
                  first_name={first_name}
                  last_name={last_name}
                  email={email}
                  phone_number={phone_number}
                  isGrandma={isGrandma}
                  cuisine_id={cuisine_id}
                  building_number={building_number}
                  address={address}
                  zip_code={zip_code}
                  password={password}
                  longitude={longitude}
                  latitude={latitude}
                  isLoggedIn={this.props.isLoggedIn}
                  handleLogin={this.handleLogin}
                  handleRegisterUser={this.handleRegisterUser}
                  handleChange={this.handleChange}
                  handleSelect={this.handleSelect}
                  cuisines={this.props.cuisines}
                  getAllCuisines={this.props.getAllCuisines}
                />
              );
            }}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(UserAuthForm);
