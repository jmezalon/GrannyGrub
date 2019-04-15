import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import { allGrandmasByCuisines } from "../actions/filterActions";
import { getAllGrandmas } from "../actions/grandmaActions";
import { getAllCuisines } from "../actions/cuisineActions";
import MainPage from "../components/mainpage/MainPage.js";

const mapStateToProps = state => {
  return {
    users: state.users,
    grandmas: state.grandmas,
    grandmasByCuisines: state.filteredGrandmas,
    cuisines: state.cuisines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getAllGrandmas: () => dispatch(getAllGrandmas()),
<<<<<<< HEAD
=======

>>>>>>> 5ee410a0b5c10075bd3778fd62d1ccfd6b74eebd
    getAllCuisines: () => dispatch(getAllCuisines()),
    allGrandmasByCuisines: id => dispatch(allGrandmasByCuisines(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
