import { connect } from "react-redux";

import { getOneDish } from "../actions/dishActions";
import { getAllCuisines } from "../actions/cuisineActions";

import EditNewDishForm from "../components/dishes/EditNewDishForm.js";

const mapStateToProps = state => {
  return {
    cuisines: state.cuisines.cuisines,
    user: state.userAuth.currentUser,
    id: state.userAuth.userId,
    dish: state.dishes.dish
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneDish: id => dispatch(getOneDish(id)),
    getAllCuisines: () => dispatch(getAllCuisines())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNewDishForm);
