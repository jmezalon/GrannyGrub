import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer.js";
import "./index.css";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import RootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

let store;
// console.log({ environment: process.env.ENVIRONMENT });
// console.log({ node_env: process.env.NODE_ENV });
if (process.env.NODE_ENV !== "production") {
  // only in non prod.
  store = createStore(
    RootReducer,
    {},
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  // default
  store = createStore(RootReducer, {}, applyMiddleware(thunk, logger));
}
window.store = store;

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
