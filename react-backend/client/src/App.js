import React from "react";
import {
  Switch,
  Redirect,
  Route,
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions';
import LoginForm from './Containers/Login-form/Login-form';

// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);

class App extends React.Component {
  render() {
    const { history } = this.props;

    return (
        <div>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
          </ul>

          <Switch>
            <Route history={history} path="/users" component={Users} />
            <Route history={history} path="/auth" component={Auth} />
            <Redirect to='/auth/login'/>
          </Switch>
        </div>
    );
  }
}

class Users extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.state.users.map(user =>
          <div key={user.userId}>{user.username}</div>
        )}
      </div>
    );
  }
}

function Auth() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Auth</h2>
      <ul>
        <li>
          <Link to={`${match.url}/login`}>Login-Form</Link>
        </li>
        <li>
          <Link to={`${match.url}/register`}>
            Register-Form
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/login`} component={LoginForm} />
        <Route path={`${match.path}/register`}>
          <h3>Please select sign in or registration.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

