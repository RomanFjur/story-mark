import React from 'react';

import AdvancedTitle from '../../components/Advanced-title/Advanced-title';

import styles from './Post-block.module.css';

const PostBlock = ({post}) => {
  return (
    <div className={styles.post}>
      <AdvancedTitle styling="userPageSecondTitle">{post.title}</AdvancedTitle>
      {post.title !== 'Вы ещё не рассказали ни одной истории'
        && <>
          <img src={post.image} alt='' className={styles.postImage}/>
          <p>{post.hashtag}</p>
        </>
      }    
    </div>
  );
}

export default PostBlock;