import { connect } from "react-redux";

import { getAllCuisines } from "../actions/cuisineActions";
import Home from "../Components/LandingPage/Home.js";

const mapStateToProps = state => {
  return { cuisines: state.cuisines };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCuisines: () => {
      dispatch(getAllCuisines());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
