import { connect } from "react-redux";

import {
  getOneGrandma,
  registerUser,
  loginUser
} from "../actions/userAuthActions";

// import { setCurrentUser } from "../actions/grandmaActions";

import { getAllCuisines } from "../actions/cuisineActions";
import UserAuthForm from "../userauth/userAuthForm";

const mapStateToProps = state => {
  return {
    currentUser: state.userAuth.currentUser,
    loggedIn: state.userAuth.loggedIn,
    userId: state.userAuth.userId,
    cuisines: state.cuisines.cuisines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCuisines: () => {
      dispatch(getAllCuisines());
    },

    registerUser: (user, loginPrams) => {
      dispatch(registerUser(user, loginPrams));
    },

    loginUser: loginPrams => {
      dispatch(loginUser(loginPrams));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthForm);
