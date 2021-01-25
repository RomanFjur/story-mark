// Import libraries
import React from 'react';
import {connect} from 'react-redux';

// Import components
import Analytics from '../../components/Analytics/Analytics';

// Import styles
import styles from './Admin.module.css';

class Admin extends React.Component {
  render() {
    return (
      <div className={styles.analyticsBlock}>
        <Analytics 
          title="Analytics: Users" 
          desc="Gives understanding of new users amount" 
          onClick={() => {this.props.history.push(`/admin/analytics/users`)}}/>
        <Analytics 
          title="Analytics: Posts" 
          desc="Gives understanding of new posts amount"
          onClick={() => {this.props.history.push(`/admin/analytics/posts`)}}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginedUser,
    currentUser: state.watchingUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserPage: (userId) => {
      dispatch({type: "LOAD_USER_PAGE", payload: userId});
    },
    addStatus: (object) => {
      dispatch({type: "ADD_STATUS", payload: object});
    },
    logout: () => {
      dispatch({type: "LOGOUT"});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);