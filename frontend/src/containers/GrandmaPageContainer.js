import { connect } from 'react-redux';

import { getGrandmasDishes } from '../actions/dishActions';

import { getOneGrandma } from '../actions/grandmaActions.js';
import GrandmaPage from '../components/userViewOfGrandma/GrandmaPage.js';

const mapStateToProps = state => {
  return { grandma: state.grandmas.grandma, dishes: state.dishes.dishes };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneGrandma: id => dispatch(getOneGrandma(id)),

    getGrandmasDishes: id => dispatch(getGrandmasDishes(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandmaPage);
