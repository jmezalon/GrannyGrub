import { connect } from "react-redux";

import { getAllOrdersForGrandma } from "../actions/orderActions";
import Order from "../components/userViewOfGrandma/Order";

const mapStateToProps = state => {
  return {
    dish: state.dishes.selectedDish,
    orders: state.orders.orders,
    id: state.userAuth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllOrdersForGrandma: id => dispatch(getAllOrdersForGrandma(id))
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
