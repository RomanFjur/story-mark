import React from "react";
import {
  Redirect,
  Route
} from "react-router-dom";

export default function UsersRoute ({component: Component, token, ...rest}) {
  console.log(Component);
  return (
    <Route
      {...rest}
      render={props => token !== undefined
        ? <Component {...props} />
        : <Redirect to='/auth/login' />}
    />
  )
}