import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import MainPage from "../Components/MainPage.js";

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
