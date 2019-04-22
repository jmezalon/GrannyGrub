import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import Dashboard from "../components/grandma/Dashboard.js";
import { getGrandmasDishes } from "../actions/dishActions";
import { logoutUser } from "../actions/userAuthActions";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    dishes: state.dishes,
    user: state.userAuth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => dispatch(getOneGrandma(id)),
    getGrandmasDishes: id => dispatch(getGrandmasDishes(id)),
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
