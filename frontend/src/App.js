import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Auth from "./userauth/utils/Auth";
import LandingPage from "./components/landingPage/landingPage";
import ProfileContainer from "./containers/ProfileContainer";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./components/navbar/Navbar.js";
import UserAuthContainer from "./containers/userAuthContainer.js";
import DishContainer from "./containers/DishContainer";
import NewDishContainer from "./containers/NewDishContainer";
import GrandmaPageContainer from "./containers/GrandmaPageContainer.js";
import DashboardContainer from "./containers/DashboardContainer";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: []
  };

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    this.props.checkAuthenticateStatus();
    this.props.getCurrentUser();
  }
  // checkAuthenticateStatus = props => {
  //   axios.post('/users/isLoggedIn').then(user => {
  //     if (user.data.email === Auth.getToken()) {
  //       this.props.setCurrentUser(user.data);
  //       this.setState({
  //         isLoggedIn: Auth.isUserAuthenticated(),
  //         email: Auth.getToken(),
  //         user: user.data,
  //       });
  //     } else {
  //       if (user.data.email) {
  //         this.logoutUser();
  //       } else {
  //         Auth.deauthenticateUser();
  //       }
  //     }
  //   });
  // };

  // componentDidMount() {
  //   this.props.getOneGrandma(1);
  // }

  // logoutUser = () => {
  //   axios
  //     .post('/users/logout')
  //     .then(() => {
  //       Auth.deauthenticateUser();
  //     })
  //     .then(() => {
  //       this.checkAuthenticateStatus();
  //     })
  //     .then(res => this.props.history.push('/auth/login'))
  //     .catch(err => {
  //       console.log('logout err', err);
  //     });
  // };

  render() {
    // console.log('YO User', this.state.user);
    console.log("YO loser", this.props.currentUser);

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
              <UserAuthContainer
                {...props}
                checkAuthenticateStatus={this.checkAuthenticateStatus}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />

          <Route exact path="/grandma/main" component={DishContainer} />
          <Route exact path="/grandma/newdish" component={NewDishContainer} />
          <Route
            exact
            path={`/grandma/edit/${this.props.currentUser.id}`}
            render={props => (
              <ProfileContainer {...props} goBack={this.goBack} />
            )}
          />
          <Route
            exact
            path={`/grandma/${this.props.currentUser.id}/dashboard`}
            render={props => (
              <DashboardContainer {...props} logoutUser={this.logoutUser} />
            )}
          />
          <Route exact path={`/grandma/:id`} component={GrandmaPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

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

//${this.state.user.id}
