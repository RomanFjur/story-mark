// Import libraries
import React from 'react';
import {connect} from 'react-redux';

import Button from '../../components/Button/Button';
import PostBlock from '../../components/Post-block/Post-block';
import AdvancedTitle from '../../components/Advanced-title/Advanced-title';

import PostForm from '../../components/Post-form/Post-form';

import styles from './Posts-block.module.css';

class PostsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: false
    }
  }

  addPostHandler = (boolean) => {
    this.setState({
      addPost: !boolean
    })
  } 

  render () {
    return (
      <div className={styles.posts}>
        <AdvancedTitle styling="userPageSecondTitle">Posts</AdvancedTitle>
        {this.props.user.id === this.props.currentUser.id 
          && <Button styling="submit" type="submit" onClick={() => {this.addPostHandler(this.state.addPost)}}>New post</Button>}
        {this.state.addPost 
          && <PostForm />}
        <div className={styles.postsBlock}>
          {this.props.posts.map(post => {
            return (
              <PostBlock post={post}></PostBlock>
            );
          })}
        </div>
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