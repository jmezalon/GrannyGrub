import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
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
    console.log(e.target.value);
  };

  registerUser = async e => {
    // console.log("heyyyyy");

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
      password
    } = this.state;

    await axios.post("/users/new", {
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
    });

    Auth.authenticateUser(email);

    let response = await axios.post("/users/login", { email, password });

    await this.props.checkAuthenticateStatus();

    this.setState({
      email: "",
      password: ""
    });

    await this.props.history.push(
      `/grandma/edit/${parseInt(response.data.id)}`
    );

    // console.log("registered");
  };

  loginUser = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    let response = axios
      .post("/users/login", { email, password })
      .then(() => {
        Auth.authenticateUser(email);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          email: "",
          password: ""
        });
      });
    this.props.getOneGrandma(parseInt(response.data.id));
  };

  render() {
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
              console.log("Login Route");
              return (
                <LogIn
                  user={this.state.user}
                  isLoggedIn={this.props.isLoggedIn}
                  loginUser={this.loginUser}
                  registerUser={this.registerUser}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <SignUp
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
                  loginUser={this.loginUser}
                  registerUser={this.registerUser}
                  handleChange={this.handleChange}
                  handleSelect={this.handleSelect}
                />
              );
            }}
          />
        </Switch>
      </>
    );
  }
}

export default UserAuthForm;
