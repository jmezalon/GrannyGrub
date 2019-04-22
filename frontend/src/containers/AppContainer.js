import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import {
  setCurrentUser,
  checkAuthenticateStatus,
  getCurrentUser
} from "../actions/userAuthActions";

import App from "../App.js";

const mapStateToProps = state => {
  return {
    // grandma: state.grandmas.grandma,
    currentUser: state.userAuth.currentUser,
    userId: state.userAuth.userId,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    getCurrentUser: () => dispatch(getCurrentUser()),
    setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
