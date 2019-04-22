import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import { getAllCuisines } from "../actions/cuisineActions";

import EditProfile from "../components/grandma/EditProfile.js";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    cuisines: state.cuisines.cuisines,
    user: state.userAuth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => {
      dispatch(getOneGrandma(id));
    },

    getAllCuisines: () => dispatch(getAllCuisines())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
