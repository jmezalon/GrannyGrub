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

const Authorize = ({ component: Component, ...props }) => {
  return (
    <Route
      path={props.path}
      render={() =>
        !props.loggedIn && !props.isGrandma ? (
          <Component {...props} />
        ) : props.loggedIn && props.isGrandma ? (
          <Redirect to={`/grandma/${props.id}/dashboard`} />
        ) : props.loggedIn && !props.isGrandma ? (
          <Redirect to={`/user/${props.id}/dashboard`} />
        ) : null
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Auth.isUserAuthenticated(),
    id: state.userAuth.userId,
    isGrandma: state.userAuth.isGrandma
  };
};

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
