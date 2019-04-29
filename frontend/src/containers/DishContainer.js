import { connect } from 'react-redux';

import { getGrandmasDishes, deleteDish } from '../actions/dishActions';
import GrandmasDishes from '../components/dishes/dishes.js';

const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes,
    userId: state.userAuth.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGrandmasDishes: id => dispatch(getGrandmasDishes(id)),
    deleteDish: (dish_id, grannyId) => dispatch(deleteDish(dish_id, grannyId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandmasDishes);
