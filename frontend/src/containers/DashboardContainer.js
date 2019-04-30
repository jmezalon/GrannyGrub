import { connect } from 'react-redux';

import { getOneGrandma } from '../actions/grandmaActions';
import Dashboard from '../components/grandma/Dashboard';
import { getGrandmasDishes, deleteDish } from '../actions/dishActions';
import { logoutUser } from '../actions/userAuthActions';
import { getAllOrdersForGrandma } from '../actions/orderActions';

const mapStateToProps = state => {
  return {
    grandma: state.grandmas.grandma,
    dishes: state.dishes.dishes,
    user: state.userAuth.currentUser,
    id: state.userAuth.userId,
    orders: state.orders.orders,
    hasOrder: state.orders.hasOrder,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => dispatch(getOneGrandma(id)),
    getGrandmasDishes: id => dispatch(getGrandmasDishes(id)),
    getAllOrdersForGrandma: id => dispatch(getAllOrdersForGrandma(id)),
    logoutUser: () => dispatch(logoutUser()),
    deleteDish: (dish_id, grannyId) => dispatch(deleteDish(dish_id, grannyId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
