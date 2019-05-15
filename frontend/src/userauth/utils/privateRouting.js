import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./Auth";

const Private = ({ component: Component, path, loggedIn, ...props }) => {
  return (
    <Route
      path={path}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location.pathname }
            }}
          />
        )
      }
    />
  );
};

//
// const Authorize = ({ component: Component, ...props }) => {
//   debugger;
//   console.log(props.location);
//   return (
//     <Route
//       path={props.path}
//       render={() =>
//         !props.loggedIn && !props.isGrandma ? (
//           <Component {...props} />
//         ) : props.loggedIn && !props.isGrandma && props.isUser ? (
//           props.history.goBack()
//         ) : props.loggedIn && !props.isGrandma ? (
//           <Redirect to={`/user/${props.id}/dashboard`} />
//         ) : props.loggedIn && props.isGrandma ? (
//           <Redirect to={`/grandma/${props.id}/dashboard`} />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

class Authorize extends React.Component {
  state = {
    location: this.props.location
  };
  render = () => {
    let props = this.props;
    let Component = this.props.component;
    let locationState = this.state.location.state;
    // { component: Component, ...this.props } = this.props
    debugger;
    console.log(props.location);
    return (
      <Route
        path={props.path}
        render={() =>
          !props.loggedIn && !props.isGrandma ? (
            <Component {...props} />
          ) : props.loggedIn && !props.isGrandma && props.isUser ? (
            props.history.goBack()
          ) : props.loggedIn && locationState && props.isGrandma ? (
            <Redirect to={locationState.from} />
          ) : props.loggedIn && !props.isGrandma ? (
            <Redirect to={`/user/${props.id}/dashboard`} />
          ) : props.loggedIn && props.isGrandma ? (
            <Redirect to={`/grandma/${props.id}/dashboard`} />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };
}

const mapStateToProps = state => {
  return {
    loggedIn: Auth.isUserAuthenticated(),
    id: state.userAuth.userId
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
