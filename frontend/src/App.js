import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./components/landingPage/landingPage";
import SignUp from "./components/grandma/SignUp";
import Login from "./components/grandma/Login";
import ProfileContainer from "./containers/ProfileContainer";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./components/navbar/Navbar.js";
import DishContainer from "./containers/DishContainer";
import NewDishContainer from "./containers/NewDishContainer";
import GrandmaPageContainer from "./containers/GrandmaPageContainer.js";
class App extends Component {
  state = {
    user: [],
    isLoggedIn: false
  };
  // cheking

  signUpUser = user => {
    return axios.post("/users/new", user).catch(err => {
      console.log("creating user Error", err);
    });
  };

  loginUser = (email, password) => {
    return axios
      .post("/users/login", {
        email: email,
        password: password
      })
      .then(res => {
        debugger;
        this.setState({
          user: res.data,
          isLoggedIn: true
        });
        this.props.getOneGrandma(parseInt(this.state.user.id));
        // return true;
      })
      .catch(err => {
        this.setState({
          isLoggedIn: false
        });
        // return false;
      });
  };

  logoutUser = () => {
    return axios
      .post("/users/logout")
      .then(res => {
        this.setState({
          isLoggedIn: false
        });
      })
      .then(res => this.props.history.push("/signin"))
      .catch(err => {
        console.log("logout err", err);
      });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/mainpage" component={MainPageContainer} />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp
                {...props}
                user={this.state.user}
                signUpUser={this.signUpUser}
                loginUser={this.loginUser}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                user={this.state.user}
                loginUser={this.loginUser}
              />
            )}
          />
          <Route exact path="/grandma/main/:id" component={DishContainer} />
          <Route exact path="/grandma/newdish" component={NewDishContainer} />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
          <Route
            exact
            path="/grandma/edit/:id"
            render={props => (
              <ProfileContainer {...props} user={this.state.user} />
            )}
          />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
