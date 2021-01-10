// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import UserBlock from '../../components/User-block/User-block';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render () {
    return (
      <div>
        {this.props.state.users.map((user, index) => {
          return <UserBlock key={user.id} name={user.name} email={user.email} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch({type: "GET_USERS"});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);