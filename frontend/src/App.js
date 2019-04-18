import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Auth from "./userauth/utils/Auth";
import LandingPage from "./components/landingPage/landingPage";
import ProfileContainer from "./containers/ProfileContainer";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./components/navbar/Navbar.js";
import UserAuthForm from "./userauth/userAuthForm.js";
import DishContainer from "./containers/DishContainer";
import NewDishContainer from "./containers/NewDishContainer";
import GrandmaPageContainer from "./containers/GrandmaPageContainer.js";
import DashboardContainer from "./containers/DashboardContainer";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: []
  };

  // cheking
  //
  // signUpUser = user => {
  //   return axios.post("/users/new", user).catch(err => {
  //     console.log("creating user Error", err);
  //   });
  // };

  // loginUser = (email, password) => {
  //   return axios
  //     .post('/users/login', {
  //       email: email,
  //       password: password,
  //     })
  //     .then(res => {
  //       debugger;
  //       this.setState({
  //         user: res.data,
  //         isLoggedIn: true,
  //       });
  //       this.props.getOneGrandma(parseInt(this.state.user.id));
  //       // return true;
  //     })
  //     .catch(err => {
  //       this.setState({
  //         isLoggedIn: false,
  //       });
  //       // return false;
  //     });
  // };
  goBack = () => {
    this.props.history.goBack();
  };

  checkAuthenticateStatus = props => {
    axios.get("/users/isLoggedIn").then(user => {
      if (user.data.email === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          email: Auth.getToken(),
          user: user.data
        });
      } else {
        if (user.data.email) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
    console.log("current user:", this.state.user);
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
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
        <Navbar user={this.state.user} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/mainpage" component={MainPageContainer} />

          <Route
            path="/auth"
            render={props => (
              <UserAuthForm
                {...props}
                checkAuthenticateStatus={this.checkAuthenticateStatus}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />

          <Route exact path="/grandma/main" component={DishContainer} />
          <Route exact path="/grandma/newdish" component={NewDishContainer} />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
          <Route
            exact
            path={`/grandma/edit/${this.state.user.id}`}
            render={props => (
              <ProfileContainer
                {...props}
                user={this.state.user}
                goBack={this.goBack}
              />
            )}
          />
          <Route
            exact
            path={`/grandma/${this.state.user.id}/dashboard`}
            render={props => (
              <ProfileContainer
                {...props}
                user={this.state.user}
                logoutUser={this.logoutUser}
              />
            )}
          />
          <DashboardContainer {...props} user={this.state.user} />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

// <Route
//   exact
//   path="/login"
//   render={props => (
//     <Login
//       {...props}
//       user={this.state.user}
//       loginUser={this.loginUser}
//     />
//   )}
// />

// <Route
//   exact
//   path="/signup"
//   render={props => (
//     <SignUp
//       {...props}
//       user={this.state.user}
//       signUpUser={this.signUpUser}
//       loginUser={this.loginUser}
//     />
//   )}
// />
