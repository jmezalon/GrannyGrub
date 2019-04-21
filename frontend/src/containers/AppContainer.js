import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import { setCurrentUser } from "../actions/userAuthActions";

import App from "../App.js";

const mapStateToProps = state => {
  return {
    // grandma: state.grandmas.grandma,
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: currentUser => {
      dispatch(setCurrentUser(currentUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
