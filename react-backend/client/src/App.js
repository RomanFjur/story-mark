// Import libraries
import React from "react";
import {
  Switch,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";

// Import Containers
import LoginForm from './containers/Login-form/Login-form';
import RegisterForm from './containers/Register-form/Register-form';

// Import styles
import styles from './App.module.css';

class App extends React.Component {
  redirectionHandler = (puth) => {
    this.props.history.replace(puth);
  }

  render() {
    const { history } = this.props;
    return (
      <div className={styles.body}>
        <Switch>
          <Route history={history} path="/users" component={Users} />
          <Route exact history={history} path="/auth/register" component={RegisterForm}/>
          <Route exact history={history} path="/auth/login" component={LoginForm} />
          <Redirect to='/auth/register'/>
        </Switch>
      </div>
    );
  }
}

class Users extends React.Component {
  
}

export default withRouter(App);

