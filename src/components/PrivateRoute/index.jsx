/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Redirect, Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((store) => store.isLogged);

  return (
    <Route
      {...rest}
      render={(props) => (
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      )}
    />
  );
};

export default PrivateRoute;
