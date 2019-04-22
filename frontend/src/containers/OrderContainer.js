import { connect } from "react-redux";

import { setSelectedDish } from "../actions/dishActions";
import Order from "../components/userViewOfGrandma/Order";

const mapStateToProps = state => {
  return {
    dish: state.dishes.selectedDish
  };
};

// const mapDispatchToProps = dispatch => {
//   return
// };

export default connect(
  mapStateToProps,
  null
)(Order);

//   id => {
//     dispatch(getGrandmasDishes(id));
//   };
// }
