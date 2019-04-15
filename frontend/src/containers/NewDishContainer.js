import { connect } from "react-redux";

import { getGrandmasDishes } from "../actions/dishActions";
import { getAllCuisines } from "../actions/cuisineActions";

import HandleNewDish from "../components/dishes/handleNewDish.js";

const mapStateToProps = state => {
  return {
    // cuisines: state.cuisines,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getAllCuisines: () => dispatch(getAllCuisines()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleNewDish);
