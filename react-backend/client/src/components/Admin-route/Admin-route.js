import React from "react";
import {
  Redirect,
  Route
} from "react-router-dom";

export default function PrivateRoute ({component: Component, admin, ...rest}) {
  console.log(admin);
  return (
    <Route
      exact
      {...rest}
      render={props => !admin
        ? <Component {...props} key={props.match.params.name || 'empty'}/>
        : <Redirect to='/auth/login' />}
    />
  )
}