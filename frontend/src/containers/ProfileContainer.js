import { connect } from "react-redux";

import { getOneGrandma, deleteGrandmaAccount } from "../actions/grandmaActions";
import { getAllCuisines } from "../actions/cuisineActions";

import EditProfile from "../components/grandma/EditProfile.js";

import { logoutUser } from "../actions/userAuthActions";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    cuisines: state.cuisines.cuisines,
    user: state.userAuth.currentUser,
    id: state.userAuth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getOneGrandma: id => dispatch(getOneGrandma(id)),
    getAllCuisines: () => dispatch(getAllCuisines()),
    deleteGrandmaAccount: id => dispatch(deleteGrandmaAccount(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
