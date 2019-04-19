import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import Dashboard from "../components/grandma/Dashboard.js";
import { getGrandmasDishes } from "../actions/dishActions";

const mapStateToProps = state => {
  return { grandma: state.grandmas.grandma, dishes: state.dishes };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => {
      dispatch(getOneGrandma(id));
    },
    getGrandmasDishes: id => {
      dispatch(getGrandmasDishes(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
