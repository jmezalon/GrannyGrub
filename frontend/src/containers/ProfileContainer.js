import { connect } from "react-redux";

import { getOneGrandma } from "../actions/grandmaActions";
import EditProfile from "../Components/grandma/EditProfile.js";

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
)(EditProfile);
