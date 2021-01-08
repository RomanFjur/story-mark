import React from "react";
import {
  Redirect,
  Route
} from "react-router-dom";

export default function PrivateRoute ({component: Component, token, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => token !== undefined
        ? <Component {...props} />
        : <Redirect to='/auth/login' />}
    />
  )
}