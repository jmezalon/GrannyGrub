import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/landingPage";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./Components/Navbar/Navbar.js";

class App extends Component {
  state = {
    loggedIn: true
  };
  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <Navbar loggedIn={loggedIn} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/mainpage" component={MainPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
