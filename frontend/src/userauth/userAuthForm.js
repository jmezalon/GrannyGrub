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
    password: ""
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
    // console.log(e.target.value);
  };

  handleRegisterUser = async e => {
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
      password
    } = this.state;

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
      cuisine_id
    };

    const loginPrams = { email, password };

    e.preventDefault();

    await this.props.registerUser(newUser, loginPrams);

    // await this.props.history.push(
    //   `/grandma/${parseInt(response.data.id)}/dashboard`
    //  );
  };

  //   await axios.post("/users/new", {});
  //
  //   Auth.authenticateUser(email);
  //
  //   let response = await axios.post("/users/login", { email, password });
  //
  //   await this.props.checkAuthenticateStatus();
  //
  //   this.setState({
  //     email: "",
  //     password: ""
  //   });
  //
  //
  //
  //   // console.log("registered");
  // };

  handleLogin = async e => {
    const { email, password } = this.state;
    let loginPrams = { email, password };

    e.preventDefault();

    await this.props.loginUser(loginPrams);
  };

  // let response = await axios.post("/users/login", { email, password });
  //
  // await Auth.authenticateUser(email);
  //
  // await this.props.checkAuthenticateStatus();
  //
  // this.setState({
  //   email: "",
  //   password: ""
  // });
  // await this.props.getOneGrandma(parseInt(response.data.id));

  // await this.props.history.push(
  //   `/grandma/${parseInt(response.data.id)}/dashboard`
  // );

  render() {
    // console.log(this.props);
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
      password
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
