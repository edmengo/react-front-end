import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import store from "~/store";

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props =>
      !store.getState().auth.signedIn ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...props} />
      ) : (
        <Redirect
          // eslint-disable-next-line react/prop-types
          to={{ pathname: "/", state: { from: props.location } }}
        />
      )
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default GuestRoute;
