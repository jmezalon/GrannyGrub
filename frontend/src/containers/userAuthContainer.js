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
    grandma: state.grandmas.grandma,
    currentUser: state.userAuth.currentUser,
    loggedIn: state.userAuth.loggedIn,
    cuisines: state.cuisines.cuisines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCuisines: () => {
      dispatch(getAllCuisines());
    },

    getOneGrandma: id => {
      dispatch(getOneGrandma(id));
    },

    registerUser: user => {
      dispatch(registerUser(user));
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
