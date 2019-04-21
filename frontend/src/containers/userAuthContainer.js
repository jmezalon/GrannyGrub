import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import App from './App'

import { setCurrentUser } from "../actions/grandmaActions";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    currentUser:state.currentUser
  };
};

const mapDispatchToProps = dispatch => {

  return {
    getOneGrandma: id => {
      dispatch(getOneGrandma(id));
  },
   setCurrentUser: currentUser => {
    dispatch(setCurrentUser(currentUser))
}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
