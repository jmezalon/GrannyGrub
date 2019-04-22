import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './Auth';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{ pathname: './auth/login', state: { from: props.locations } }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    loggedIn: Auth.isUserAuthenticated(),
  };
};

//       Auth.isUserAuthenticated() ? (
//         <Component {...props} {...rest} />
//       ) : (
//         <Redirect
//           to={{ pathname: "./auth/login", state: { from: props.locations } }}
//         />
//       )
//     }
//   />
// );

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(PrivateRoute)
);
