import React, { Component } from "react";
import "./App.css";
import LandingPage from "./Components/landingPage";
import Navbar from "./Components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
