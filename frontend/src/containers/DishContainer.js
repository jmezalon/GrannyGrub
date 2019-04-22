import { connect } from 'react-redux';

import { getGrandmasDishes } from '../actions/dishActions';
import GrandmasDishes from '../components/dishes/dishes.js';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    id: state.userAuth.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGrandmasDishes: id => {
      dispatch(getGrandmasDishes(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandmasDishes);
