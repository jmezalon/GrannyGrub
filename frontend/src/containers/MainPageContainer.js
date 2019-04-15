<<<<<<< HEAD
import { connect } from 'react-redux';
import { getAllUsers } from '../actions/userActions';
import { getAllGrandmas } from '../actions/grandmaActions';
import MainPage from '../components/MainPage.js';
=======
import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import { allGrandmasByCuisines } from "../actions/filterActions";
import { getAllGrandmas } from "../actions/grandmaActions";
import { getAllCuisines } from "../actions/cuisineActions";
import MainPage from "../components/mainpage/MainPage.js";
>>>>>>> 5276fbaa0120682ca259335bc96e58ab25370e27

const mapStateToProps = state => {
  return {
    users: state.users,
    grandmas: state.grandmas,
<<<<<<< HEAD
=======
    grandmasByCuisines: state.filteredGrandmas,
    cuisines: state.cuisines
>>>>>>> 5276fbaa0120682ca259335bc96e58ab25370e27
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getAllGrandmas: () => dispatch(getAllGrandmas()),
<<<<<<< HEAD
=======
    getAllCuisines: () => dispatch(getAllCuisines()),
    allGrandmasByCuisines: id => dispatch(allGrandmasByCuisines(id))
>>>>>>> 5276fbaa0120682ca259335bc96e58ab25370e27
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
