// Import libraries
import React from "react";
import {
  Switch,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";
import {connect} from 'react-redux';

// Import containers
import LoginForm from './containers/Login-form/Login-form';
import RegisterForm from './containers/Register-form/Register-form';
import UsersPage from './containers/Users-page/Users-page';
import UserPage from './containers/User-page/User-page';
import Admin from './containers/Admin/Admin';

// Import components
import PrivateRoute from './components/Private-route/Private-route';
import AdminRoute from './components/Admin-route/Admin-route';
import AnalyticsUsers from './components/Analytics-users/Analytics-users';
import AnalyticsPosts from './components/Analytics-posts/Analytics-posts';

// Import styles
import styles from './App.module.css';

class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.body}>
        <Switch>
          <PrivateRoute component={UserPage} token={this.props.token} path="/users/:id" history={history}/>
          <PrivateRoute component={UsersPage} token={this.props.token} path="/users" history={history}/>
          <Route exact history={history} path="/auth/register" component={RegisterForm}/>
          <Route exact history={history} path="/auth/login" component={LoginForm}/>
          <Route exact component={Admin} path="/admin" history={history}/>
          <Route exact component={AnalyticsUsers} path="/admin/analytics/users" history={history}/>
          <Route exact component={AnalyticsPosts} path="/admin/analytics/posts" history={history}/>
          <Redirect to='/auth/register'/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    users: state.users
  }
}

export default connect(mapStateToProps)(withRouter(App));

