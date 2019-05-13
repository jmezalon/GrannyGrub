import { connect } from "react-redux";

import { getAllOrdersForGrandma } from "../actions/orderActions";
import { getOneGrandma } from "../actions/grandmaActions.js";
import { getOneDish } from "../actions/dishActions.js";
import OrderRoutes from "../components/userViewOfGrandma/OrderRoutes";

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    dish: state.dishes.dish,
    orders: state.orders.orders,
    id: state.userAuth.userId,
    currentUser: state.userAuth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllOrdersForGrandma: id => dispatch(getAllOrdersForGrandma(id)),
    getOneGrandma: id => dispatch(getOneGrandma(id)),
    getOneDish: id => dispatch(getOneDish(id))
    // setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderRoutes);
