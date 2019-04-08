import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/landingPage";
import Home from "./Components/LandingPage/Home";
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
          <Route exact path="/home" component={Home} />
          <Route exact path="/mainpage" component={MainPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
