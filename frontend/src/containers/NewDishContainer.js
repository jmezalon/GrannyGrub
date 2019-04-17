import { connect } from "react-redux";

// import { getGrandmasDishes } from "../actions/dishActions";

import { getAllCuisines } from "../actions/cuisineActions";
import { getAllLabels } from "../actions/dishActions";

import HandleNewDish from "../components/dishes/handleNewDish.js";

const mapStateToProps = state => {
  return {
    cuisines: state.cuisines,
    labels: state.dishes.labels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCuisines: () => dispatch(getAllCuisines()),
    getAllLabels: () => dispatch(getAllLabels())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleNewDish);
