// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import UserBlock from '../../components/User-block/User-block';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.loadUserPage(this.props.state.user.id);
  }

  render() {
    return (
      <div>
        <UserBlock
          name={this.props.state.user.name} 
          email={this.props.state.user.email} 
          onClick={() => {this.props.history.push(`/users/${this.props.state.user.id}`)}}
        />
        <p>{this.props.state.user.name}</p>
        <p>{this.props.state.user.email}</p>
        <p>{this.props.state.posts}</p>
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
    loadUserPage: (userId) => {
      dispatch({type: "LOAD_USER_PAGE", payload: userId});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);