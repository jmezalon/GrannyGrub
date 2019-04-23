import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import { grandmasByMultiCriteria } from "../actions/filterActions";
import { getAllGrandmas } from "../actions/grandmaActions";
import { getAllCuisines } from "../actions/cuisineActions";
import MainPage from "../components/mainPage/MainPage.js";

const mapStateToProps = state => {
  return {
    users: state.users,
    grandmas: state.grandmas.grandmas,
    grandmasByCuisines: state.filteredGrandmas,
    cuisines: state.cuisines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getAllGrandmas: () => dispatch(getAllGrandmas()),
    getAllCuisines: () => dispatch(getAllCuisines()),
    grandmasByMultiCriteria: data => dispatch(grandmasByMultiCriteria(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
