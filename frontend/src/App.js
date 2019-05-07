import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/landingPage/landingPage";
import OrderContainer from "./containers/OrderContainer";
import ProfileContainer from "./containers/ProfileContainer";
import HomeContainer from "./containers/HomeContainer";
import MainPageContainer from "./containers/MainPageContainer";
import Navbar from "./components/navbar/Navbar.js";
import GrannyNavbar from "./components/navbar/GrannyNavbar.js";
import UserNavbar from "./components/navbar/UserNavbar.js";

import UserAuthContainer from "./containers/userAuthContainer.js";
import NewDishContainer from "./containers/NewDishContainer";
import EditDishContainer from "./containers/EditDishContainer";
import GrandmaPageContainer from "./containers/GrandmaPageContainer.js";
import DashboardContainer from "./containers/DashboardContainer";
import UserDashboardContainer from "./containers/UserDashboardContainer";

import { PrivateRoute, AuthRoute } from "./userauth/utils/privateRouting.js";

class App extends Component {
  state = {
    isOrdering: false,
    isUser: false,
    isGrandma: true
  };

  handleGetATaste = () => {
    if (!this.state.currentUser) {
      this.setState({ isOrdering: true });
    }
  };

  handleUserSignUpType = () => {
    this.setState({ isUser: true, isGrandma: false });
  };

  handleUserSignUpType2 = () => {
    this.setState({ isUser: false, isGrandma: true });
  };

  handleGetATasteReset = () => {
    this.setState({ isOrdering: false, isUser: false, isGrandma: true });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }

  render() {
    // if (this.props.currentUser) {
    //   const { id } = this.props.currentUser.id;
    // }
    return (
      <div className="App">
        {this.props.userId && this.props.currentUser.isgrandma ? (
          <GrannyNavbar
            id={this.props.userId}
            logoutUser={this.props.logoutUser}
            handleGetATasteReset={this.handleGetATasteReset}
          />
        ) : this.props.userId && !this.props.currentUser.isgrandma ? (
          <UserNavbar
            id={this.props.userId}
            logoutUser={this.props.logoutUser}
            handleGetATasteReset={this.handleGetATasteReset}
          />
        ) : (
          <Navbar
            isOrdering={this.state.isOrdering}
            handleGetATasteReset={this.handleGetATasteReset}
            id={this.props.userId}
            handleUserSignUpType={this.handleUserSignUpType}
            handleUserSignUpType2={this.handleUserSignUpType2}
          />
        )}
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <LandingPage
                {...props}
                handleGetATaste={this.handleGetATaste}
                isOrdering={this.state.isOrdering}
              />
            )}
          />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/mainpage" component={MainPageContainer} />
          <PrivateRoute
            path={"/grandma/:id/dashboard"}
            component={DashboardContainer}
            goBack={this.goBack}
            id={this.props.userid}
          />
          <PrivateRoute
            path={"/user/:id/dashboard"}
            component={UserDashboardContainer}
          />
          <PrivateRoute
            path={"/grandma/edit/:id"}
            component={ProfileContainer}
            goBack={this.goBack}
            id={this.props.userid}
            logoutUser={this.props.logoutUser}
          />
          <PrivateRoute
            path={"/grandma/newdish"}
            component={NewDishContainer}
            goBack={this.goBack}
          />
          <PrivateRoute
            path={"/edit/newdish/:id"}
            component={EditDishContainer}
            goBack={this.goBack}
          />
          <AuthRoute
            path={"/auth"}
            component={UserAuthContainer}
            isUser={this.state.isUser}
            isGrandma={this.state.isGrandma}
          />
          <Route
            path={"/order/dish/:id"}
            render={props => <OrderContainer {...props} goBack={this.goBack} />}
          />
          <Route exact path="/grandma/:id" component={GrandmaPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// ask muna about the difference between AuthRoute and Route

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

//-----------------------------------

// import React, { Component } from "react";
// import { Switch, Route, withRouter } from "react-router-dom";
// import "./App.css";
//
// import LandingPage from "./components/landingPage/landingPage";
// import OrderContainer from "./containers/OrderContainer";
// import ProfileContainer from "./containers/ProfileContainer";
// import HomeContainer from "./containers/HomeContainer";
// import MainPageContainer from "./containers/MainPageContainer";
// import Navbar from "./components/navbar/Navbar.js";
// import GrannyNavbar from "./components/navbar/GrannyNavbar.js";
// import UserAuthContainer from "./containers/userAuthContainer.js";
// import NewDishContainer from "./containers/NewDishContainer";
// import EditDishContainer from "./containers/EditDishContainer";
// import GrandmaPageContainer from "./containers/GrandmaPageContainer.js";
// import DashboardContainer from "./containers/DashboardContainer";
//
// import { PrivateRoute, AuthRoute } from "./userauth/utils/privateRouting.js";
//
// class App extends Component {
//   state = {
//     isOrdering: false
//   };
//
//   handleGetATaste = () => {
//     if (!this.state.currentUser) {
//       this.setState({ isOrdering: true });
//     }
//   };
//
//   handleGetATasteReset = () => {
//     this.setState({ isOrdering: false });
//   };
//
//   goBack = () => {
//     this.props.history.goBack();
//   };
//
//   componentDidMount() {
//     this.props.checkAuthenticateStatus();
//   }
//
//   render() {
//     // if (this.props.currentUser) {
//     //   const { id } = this.props.currentUser.id;
//     // }
//     return (
//       <div className="App">
//         {this.props.userId ? (
//           <GrannyNavbar
//             id={this.props.userId}
//             logoutUser={this.props.logoutUser}
//             handleGetATasteReset={this.handleGetATasteReset}
//           />
//         ) : (
//           <Navbar
//             isOrdering={this.state.isOrdering}
//             handleGetATasteReset={this.handleGetATasteReset}
//             id={this.props.userId}
//           />
//         )}
//         <Switch>
//           <Route
//             exact
//             path={"/"}
//             render={props => (
//               <LandingPage
//                 {...props}
//                 handleGetATaste={this.handleGetATaste}
//                 isOrdering={this.state.isOrdering}
//               />
//             )}
//           />
//           <Route exact path="/home" component={HomeContainer} />
//           <Route exact path="/mainpage" component={MainPageContainer} />
//
//           <PrivateRoute
//             path={"/grandma/:id/dashboard"}
//             component={DashboardContainer}
//             goBack={this.goBack}
//             id={this.props.userid}
//           />
//
//           <PrivateRoute
//             path={"/grandma/edit/:id"}
//             component={ProfileContainer}
//             goBack={this.goBack}
//             id={this.props.userid}
//             logoutUser={this.props.logoutUser}
//           />
//
//           <PrivateRoute
//             path={"/grandma/newdish"}
//             component={NewDishContainer}
//             goBack={this.goBack}
//           />
//
//           <PrivateRoute
//             path={"/edit/newdish/:id"}
//             component={EditDishContainer}
//             goBack={this.goBack}
//           />
//
//           <AuthRoute path={"/auth"} component={UserAuthContainer} />
//
//           <Route
//             exact
//             path={"/dish/:id/order"}
//             render={props => <OrderContainer {...props} goBack={this.goBack} />}
//           />
//
//           <Route exact path="/grandma/:id" component={GrandmaPageContainer} />
//         </Switch>
//       </div>
//     );
//   }
// }
//
// export default withRouter(App);
//
// // <Route exact path="/grandma/main" component={DishContainer} />
//
// //  <Route
// //   exact
// //   path={'/grandma/:id/dashboard'}
// //   component={DashboardContainer}
// // />
//
// // <PrivateRoute
// //   path={`/grandma/:id/dashboard`}
// //   component={DashboardContainer}
// // />
//
// // <Route
// //   exact
// //   path={`/grandma/${this.props.userId}/dashboard`}
// //   component={DashboardContainer}
// // />
//
// // <Route
// //   exact
// //   path={"/grandma/:id/dashboard"}
// //   component={DashboardContainer}
// // />
//
// // <PrivateRoute
// //        path={`/grandma/${id}/dashboard`}
// //   render={() => {
// //     if (isLoggedIn) {
// //       return <Redirect to="/dashboard"
// //
// //   component={DashboardContainer}
// //   isLoggedIn={isLoggedIn}
// // />
// //
// // <Route
// //   exact
// //   path={"/grandma/:id/dashboard"}
// //   component={DashboardContainer}
// // />
//
// // <Route
// //   exact
// //   path={`/grandma/edit/:id`}
// //   render={props => (
// //     <ProfileContainer {...props} goBack={this.goBack} />
// //   )}
// // />
// //
// // <Route exact path="/grandma/newdish" component={NewDishContainer} />
