import React from "react";
import {
  Switch,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";

import LoginForm from './Containers/Login-form/Login-form';
import RegisterForm from './Containers/Register-form/Register-form';

class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
        <div>
          <Switch>
            <Route history={history} path="/users" component={Users} />
            <Route history={history} path="/auth/register" component={RegisterForm} />
            <Route history={history} path="/auth/login" component={LoginForm} />
            <Redirect to='/auth/register'/>
          </Switch>
        </div>
    );
  }
}

class Users extends React.Component {
  
}

export default withRouter(App);

