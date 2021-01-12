// Import libraries
import React from 'react';
import {connect} from 'react-redux';

// Import components
import UserBlock from '../../components/User-block/User-block';
import Button from '../../components/Button/Button';
import MainTitle from '../../components/Main-title/Main-title';
import AdvancedTitle from '../../components/Advanced-title/Advanced-title';

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
    console.log(this.state.value, status);
    this.setState({
      value: status
    })
  }

  componentDidMount() {
    const user = this.props.match.params.id;
    this.props.loadUserPage(user);
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.profileBlock}>
          <Button styling="logout" type="submit"></Button>
          <UserBlock
            name={this.props.user.name} 
            email={this.props.user.email} 
            onClick={() => {this.props.history.push(`/users/${this.props.user.id}`)}}
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.userBlock}>
            <div className={styles.userImage}><img src="" alt=''/></div>
            <MainTitle styling="userPageTitle">{this.props.user.name}</MainTitle>
            <p>{this.props.user.status}</p>
            <div className={styles.userStatus}>
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
          </div>
          <div>
            <AdvancedTitle styling="userPageSecondTitle">Gallery</AdvancedTitle>
            <ul className={styles.galleryBlock}>
              <li className={styles.galleryItem}></li>
              <li className={styles.galleryItem}></li>
              <li className={styles.galleryItem}></li>
            </ul>
          </div>
          <PostsBlock />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserPage: (userId) => {
      dispatch({type: "LOAD_USER_PAGE", payload: userId});
    },
    addStatus: (object) => {
      dispatch({type: "ADD_STATUS", payload: object});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);