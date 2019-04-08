import { connect } from "react-redux";
import { getAllGrandmas } from "../actions/grandmaActions";
import MainPage from "../Components/MainPage.js";

const mapStateToProps = state => {
  return { grandmas: state.grandmas };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllGrandmas: () => {
      dispatch(getAllGrandmas());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
