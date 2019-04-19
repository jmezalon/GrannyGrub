import { connect } from 'react-redux';

import { getGrandmasDishes } from '../actions/dishActions';
import GrandmasDishes from '../components/dishes/dishes.js';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGrandmasDishes: id => {
      dispatch(getGrandmasDishes(5));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandmasDishes);
