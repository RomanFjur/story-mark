// Import libraries
import React from "react";
import {
  Switch,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";
import {connect} from 'react-redux';

// Import Containers
import LoginForm from './containers/Login-form/Login-form';
import RegisterForm from './containers/Register-form/Register-form';
import UsersPage from './containers/Users-page/Users-page';
import PrivateRoute from './components/Private-route/Private-route';

// Import styles
import styles from './App.module.css';

class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.body}>
        <Switch>
          <PrivateRoute component={UsersPage} token={this.props.user.token} path="/users" history={history}/>
          <Route exact history={history} path="/auth/register" component={RegisterForm}/>
          <Route exact history={history} path="/auth/login" component={LoginForm}/>
          <Redirect to='/auth/register'/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(withRouter(App));

