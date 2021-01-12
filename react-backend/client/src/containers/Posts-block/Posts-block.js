// Import libraries
import React from 'react';
import {connect} from 'react-redux';

import Button from '../../components/Button/Button';
import AdvancedTitle from '../../components/Advanced-title/Advanced-title';

import styles from './Posts-block.module.css';

class PostsBlock extends React.Component {
  render () {
    return (
      // <div className={styles.usersBlock}>
      //   {this.props.users.map((user, index) => {
      //     return (
      //       <UserBlock 
      //         key={user.id} 
      //         name={user.name} 
      //         email={user.email} 
      //         onClick={() => {this.renderUserPage(user.id)}}
      //       />
      //     );
      //   })}
      // </div>
      <div className={styles.posts}>
        <AdvancedTitle styling="userPageSecondTitle">Posts</AdvancedTitle>
        <Button styling="submit" type="submit">New post</Button>
        <ul className={styles.postsBlock}>
          <li className={styles.post}>
            <p>{this.props.posts}</p>
          </li>
          <li className={styles.post}>
            <AdvancedTitle styling="userPageSecondTitle">That was a hard travel</AdvancedTitle>
            <img src='' alt='' className={styles.postImage}/>
            <p>#mountains #nature #river</p>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostsBlock);