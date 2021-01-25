// Import libraries
import React from 'react';
import {connect} from 'react-redux';

// Import components
import UserBlock from '../../components/User-block/User-block';
import Button from '../../components/Button/Button';
import MainTitle from '../../components/Main-title/Main-title';
import AdvancedTitle from '../../components/Advanced-title/Advanced-title';
import AvatarBlock from '../../components/Avatar-block/Avatar-block';

// Import containers
import PostsBlock from '../Posts-block/Posts-block';

// Import styles
import styles from './User-page.module.css';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  changeStatusValue = (status) => {
    this.setState({
      value: status
    })
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.loadUserPage(userId);
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.profileBlock}>
          {this.props.user.isAdmin 
            && <Button 
            styling="admin" 
            type="submit" 
            onClick={() => {this.props.history.push(`/admin`)}}>ADMIN</Button>}
          <Button 
            styling="logout" 
            type="reset" 
            onClick={() => {this.props.logout()}} />
          <UserBlock
            name={this.props.user.name} 
            email={this.props.user.email} 
            avatar={this.props.user.avatar}
            onClick={() => {this.props.history.push(`/users/${this.props.user.id}`)}}>
          </UserBlock>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.userBlock}>
            <AvatarBlock 
              avatar={this.props.currentUser.avatar} 
              avatarStyle={styles.userImage}/>
            <MainTitle styling="userPageTitle">{this.props.currentUser.name}</MainTitle>
            <p className={styles.actualStatus}>
              {this.props.currentUser.name === this.props.user.name
                ? this.props.user.status
                : this.props.currentUser.status}
            </p>
            {this.props.currentUser.id === this.props.user.id 
              && <div className={styles.userStatus}>
                  <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="WoHoo! I'm on the mountains!" 
                    onChange={(e) => {this.changeStatusValue(e.target.value)}}
                  />
                  <Button 
                    styling="status" 
                    type="submit" 
                    onClick={() => {this.props.addStatus({id: this.props.user.id, status: this.state.value})}} 
                  />
                </div>
            }
          </div>
          <div>
            <AdvancedTitle styling="userPageSecondTitle">Gallery</AdvancedTitle>
            <ul className={styles.galleryBlock}>
              <li className={styles.galleryItem}></li>
              <li className={styles.galleryItem}></li>
              <li className={styles.galleryItem}></li>
            </ul>
          </div>
          <PostsBlock user={this.props.user} currentUser={this.props.currentUser}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);