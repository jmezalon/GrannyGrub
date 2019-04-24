import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./Auth";

const Private = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={path}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to={"/auth/register"} />
      }
    />
  );
};

const Authorize = ({ component: Component, path, loggedIn, id }) => {
  return (
    <Route
      path={path}
      render={props =>
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/grandma/${id}/dashboard`} />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Auth.isUserAuthenticated(),
    id: state.userAuth.userId
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

export const PrivateRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Private)
);

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Authorize)
);
