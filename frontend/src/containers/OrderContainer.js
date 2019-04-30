import { connect } from "react-redux";

import { getAllOrdersForGrandma } from "../actions/orderActions";
import { getOneGrandma } from "../actions/grandmaActions.js";
import Order from "../components/userViewOfGrandma/Order";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    dish: state.dishes.selectedDish,
    orders: state.orders.orders,
    id: state.userAuth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllOrdersForGrandma: id => dispatch(getAllOrdersForGrandma(id)),
    getOneGrandma: id => dispatch(getOneGrandma(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);

//   id => {
//     dispatch(getGrandmasDishes(id));
//   };
// }
