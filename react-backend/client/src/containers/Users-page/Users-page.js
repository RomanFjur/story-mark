// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import UserBlock from '../../components/User-block/User-block';

class UsersPage extends React.Component {
  render () {
    console.log(this.props.state.users);
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

export default connect(mapStateToProps)(UsersPage);