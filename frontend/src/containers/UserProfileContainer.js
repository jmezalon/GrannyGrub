import { connect } from "react-redux";

import { getOneGrandma, deleteGrandmaAccount } from "../actions/grandmaActions";

import EditUserProfile from "../components/grandma/EditUserProfile.js";

import { logoutUser } from "../actions/userAuthActions";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    user: state.userAuth.currentUser,
    id: state.userAuth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getOneGrandma: id => dispatch(getOneGrandma(id)),
    deleteGrandmaAccount: id => dispatch(deleteGrandmaAccount(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfile);
