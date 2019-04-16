import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import { SignUp } from "./components/grandma/SignUp";
import { Login } from "./components/grandma/Login";
import ProfileContainer from "./containers/ProfileContainer";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./components/navbar/Navbar.js";
import DishContainer from "./containers/DishContainer";
import NewDishContainer from "./containers/NewDishContainer";
import GrandmaPageContainer from "./containers/GrandmaPageContainer.js";
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
          <Route exact path="/grandma/main" component={DishContainer} />
          <Route exact path="/grandma/newdish" component={NewDishContainer} />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
          <Route exact path="/grandma/edit/:id" component={ProfileContainer} />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
