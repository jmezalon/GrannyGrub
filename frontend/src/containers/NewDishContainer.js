import { connect } from "react-redux";

import { getGrandmasDishes } from "../actions/dishActions";
import HandleNewDish from "../components/dishes/handleNewDish.js";

const mapStateToProps = state => {
  return {
    cuisines: state.cuisines
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getGrandmasDishes: id => {
//       dispatch(getGrandmasDishes(5));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleNewDish);
