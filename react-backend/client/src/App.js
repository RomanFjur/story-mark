import React from "react";
import {
  Switch,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";

import LoginForm from './Containers/Login-form/Login-form';
import RegisterForm from './Containers/Register-form/Register-form';

// import HTTPClient from './Services/api.js';
// const client = new HTTPClient('http://localhost:3000');

// const endpointGetToDos = client.endpoint('GET', '/users');
// const endpointCreateToDo = client.endpoint('POST', '/login');
// const endpointUpdateToDo = client.endpoint('PUT', '/users/:userId');
// const endpointDeleteToDo = client.endpoint('DELETE', '/users/:userId');

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

export default withRouter(App);

