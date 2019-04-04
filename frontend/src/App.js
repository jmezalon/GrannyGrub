import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/landingPage";
import Navbar from "./Components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
