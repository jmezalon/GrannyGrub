import { connect } from 'react-redux';

// import { getOneGrandma } from "../actions/grandmaActions";
import {
  setCurrentUser,
  checkAuthenticateStatus,
  getCurrentUser,
  logoutUser
} from '../actions/userAuthActions';

import App from '../App.js';

const mapStateToProps = state => {
  return {
    // grandma: state.grandmas.grandma,
    currentUser: state.userAuth.currentUser,
    userId: state.userAuth.userId,
    loggedIn: state.userAuth.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    getCurrentUser: () => dispatch(getCurrentUser()),
    setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser)),
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
