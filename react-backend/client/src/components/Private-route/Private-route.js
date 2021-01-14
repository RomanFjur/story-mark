import React from "react";
import {
  Redirect,
  Route
} from "react-router-dom";

export default function PrivateRoute ({component: Component, token, ...rest}) {
  return (
    <Route
      exact
      {...rest}
      render={props => token !== undefined
        ? <Component {...props} key={props.match.params.id || 'empty'}/>
        : <Redirect to='/auth/login' />}
    />
  )
}