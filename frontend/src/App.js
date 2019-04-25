import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Auth from './userauth/utils/Auth';
import LandingPage from './components/landingPage/landingPage';
import OrderContainer from './containers/OrderContainer';
import ProfileContainer from './containers/ProfileContainer';
import HomeContainer from './containers/HomeContainer';
import MainPageContainer from './containers/MainPageContainer';
import Navbar from './components/navbar/Navbar.js';
import UserAuthContainer from './containers/userAuthContainer.js';
import DishContainer from './containers/DishContainer';
import NewDishContainer from './containers/NewDishContainer';
import GrandmaPageContainer from './containers/GrandmaPageContainer.js';
import DashboardContainer from './containers/DashboardContainer';

import DashboardMain from './components/grandma/DashboardMain';

import { PrivateRoute, AuthRoute } from './userauth/utils/privateRouting.js';

class App extends Component {
  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }

  render() {
    // console.log('YO User', this.state.user);
    // console.log("YO loser", this.props.currentUser.id);

    // if (this.props.currentUser) {
    //   const { id } = this.props.currentUser.id;
    // }

    return (
      <div className="App">
        <Navbar id={this.props.userId} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/mainpage" component={MainPageContainer} />

          <PrivateRoute
            path={'/grandma/:id/dashboard'}
            component={DashboardContainer}
            goBack={this.goBack}
            id={this.props.userid}
          />

          <PrivateRoute
            path={'/grandma/edit/:id'}
            component={ProfileContainer}
            goBack={this.goBack}
            id={this.props.userid}
          />

          <PrivateRoute
            path={'/grandma/newdish'}
            component={NewDishContainer}
            goBack={this.goBack}
          />

          <AuthRoute path={'/auth'} component={UserAuthContainer} />

          <Route
            exact
            path={'/grandma/:id/order'}
            render={props => <OrderContainer {...props} goBack={this.goBack} />}
          />

          <Route exact path="/grandma/:id" component={GrandmaPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// <Route exact path="/grandma/main" component={DishContainer} />

//  <Route
//   exact
//   path={'/grandma/:id/dashboard'}
//   component={DashboardContainer}
// />

// <PrivateRoute
//   path={`/grandma/:id/dashboard`}
//   component={DashboardContainer}
// />

// <Route
//   exact
//   path={`/grandma/${this.props.userId}/dashboard`}
//   component={DashboardContainer}
// />

// <Route
//   exact
//   path={"/grandma/:id/dashboard"}
//   component={DashboardContainer}
// />

// <PrivateRoute
//        path={`/grandma/${id}/dashboard`}
//   render={() => {
//     if (isLoggedIn) {
//       return <Redirect to="/dashboard"
//
//   component={DashboardContainer}
//   isLoggedIn={isLoggedIn}
// />
//
// <Route
//   exact
//   path={"/grandma/:id/dashboard"}
//   component={DashboardContainer}
// />

// <Route
//   exact
//   path={`/grandma/edit/:id`}
//   render={props => (
//     <ProfileContainer {...props} goBack={this.goBack} />
//   )}
// />
//
// <Route exact path="/grandma/newdish" component={NewDishContainer} />
