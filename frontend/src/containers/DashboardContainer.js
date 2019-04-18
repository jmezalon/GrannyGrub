import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import Dashboard from "../components/grandma/Dashboard.js";

const mapStateToProps = state => {
  return { grandma: state.grandmas.grandma };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => {
      dispatch(getOneGrandma(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
