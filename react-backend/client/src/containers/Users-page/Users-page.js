// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import UserBlock from '../../components/User-block/User-block';

// Import styles
import styles from './Users-page.module.css';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUserPage = (id) => {
    this.props.history.push(`/users/${id}`);
  }

  render () {
    return (
      <div className={styles.usersBlock}>
        {Array.isArray(this.props.users) && this.props.users.map((user, index) => {
          return (
            <UserBlock 
              key={user.id} 
              name={user.name} 
              email={user.email}
              avatar={user.avatar}
              onClick={() => {this.renderUserPage(user.id)}}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
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