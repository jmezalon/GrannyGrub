import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/landingPage";
import { SignUp } from "./Components/grandma/SignUp";
import { Login } from "./Components/grandma/Login";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./Components/Navbar/Navbar.js";

class App extends Component {
  state = {
    loggedIn: true
  };
  // cheking
  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <Navbar loggedIn={loggedIn} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/mainpage" component={MainPageContainer} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
