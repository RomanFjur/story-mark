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

class App extends React.Component {
  render() {
    const { history } = this.props;

    return (
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
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
            <Route history={history} path="/" component={Home} />
            <Redirect from='/' to='auth/register'/>
          </Switch>
        </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

// const User = (props) => {
//   const user = users.get(parseInt(props.match.params.userId, 3));
//   if (!user) {
//     return <div>Sorry, but the user was not found</div>
//   }
//   return (
//     <div>
//       <h1>{user.username} (#{user.userId})</h1>
//     </div>
//   );
// }

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
          <Link to={`${match.url}/login`}>Login</Link>
        </li>
        <li>
          <Link to={`${match.url}/register`}>
            Register
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:authtypeId`}>
          <AuthType />
        </Route>
        <Route path={match.path}>
          <h3>Please select sign in or registration.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function AuthType() {
  let { authtypeId } = useParams();
  return <h3>Requested topic ID: {authtypeId}</h3>;
}

export default withRouter(App);

