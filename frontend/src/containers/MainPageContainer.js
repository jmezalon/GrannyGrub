import { connect } from 'react-redux';
import { getAllUsers } from '../actions/userActions';
import { getAllGrandmas } from '../actions/grandmaActions';
import MainPage from '../components/MainPage.js';

const mapStateToProps = state => {
  return {
    users: state.users,
    grandmas: state.grandmas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getAllGrandmas: () => dispatch(getAllGrandmas()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
