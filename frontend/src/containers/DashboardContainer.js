import { connect } from 'react-redux';

import { getOneGrandma } from '../actions/grandmaActions';
import Dashboard from '../components/grandma/Dashboard.js';
import { getGrandmasDishes } from '../actions/dishActions';
import { logoutUser } from '../actions/userAuthActions';
import { getAllOrdersForGrandma } from '../actions/orderActions';

const mapStateToProps = state => {
  console.log('dash id', state.userAuth.userId);
  return {
    grandma: state.grandmas.grandma,
    dishes: state.dishes.dishes,
    user: state.userAuth.currentUser,
    id: state.userAuth.userId,
    orders: state.orders.orders,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => dispatch(getOneGrandma(id)),
    getGrandmasDishes: id => dispatch(getGrandmasDishes(id)),
    getAllOrdersForGrandma: id => dispatch(getAllOrdersForGrandma(id)),
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
