import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import { allGrandmasByCuisines } from "../actions/filterActions";
import { getAllGrandmas } from "../actions/grandmaActions";
import MainPage from "../components/MainPage.js";

const mapStateToProps = state => {
  return {
    users: state.users,
    grandmas: state.grandmas,
    grandmasByCuisines: state.filteredGrandmas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getAllGrandmas: () => dispatch(getAllGrandmas()),
    allGrandmasByCuisines: id => dispatch(allGrandmasByCuisines(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
