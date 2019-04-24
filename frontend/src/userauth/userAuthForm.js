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
    // console.log(e.target.value);
  };

  // getCoords = coords => {
  //   // console.log(this.state, "before");
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${coords}&key=AIzaSyAThAa2thsgXHfh-D09OkhewLe5VVAlhYs`
  //     )
  //     .then(res => {
  //       this.setState({
  //         longitude: res.data.results[0].geometry.location.lnt,
  //         latitude: res.data.results[0].geometry.location.lat
  //       });
  //     });
  //   // .then((err) => {
  //   // console.log(err, "coords err");
  //   // });
  // };

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
    // let grannyAddress = `${building_number}, ${address}, New York,  ${zip_code}`;

    // await this.getCoords(
    //   ``
    // );
    // this.getCoords = coords => {
    //   // console.log(this.state, "before");
    let coords = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${building_number}, ${address}, New York, ${zip_code}&key=AIzaSyAThAa2thsgXHfh-D09OkhewLe5VVAlhYs`
    );
    // .then(res => {

    this.setState({
      longitude: coords.data.results[0].geometry.location.lng,
      latitude: coords.data.results[0].geometry.location.lat
    });
    // });
    // .then((err) => {
    // console.log(err, "coords err");
    // });
    // };
    // console.log(this.state.latitude, "after");

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
    // console.log(newUser, "before registering");
    // console.log(longitude, "before registering");
    // console.log(latitude, "before registering");

    this.props.registerUser(newUser, loginPrams);
    // console.log(newUser, "when registerring");
    this.handleLoginRequest();
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const loginPrams = { email, password };

    console.log("LOGIN", this.props.loginUser);

    await this.props.loginUser(loginPrams);
  };
  //
  // handleLoginRequest = () => {
  //   // this.handleLoginRequest().then(currentUser => {
  //   console.log("here");
  //   if (this.props.id) {
  //     this.props.history.push(`/grandma/${this.props.id}/dashboard`);
  //   }
  // };

  render() {
    // console.log(this.props);
    // console.log("afterlogin", this.props.currentUser);
    //
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
