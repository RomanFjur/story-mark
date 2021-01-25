import React from 'react';

import AdvancedTitle from '../../components/Advanced-title/Advanced-title';

import styles from './Post-block.module.css';

const PostBlock = ({post = 'empty'}) => {
  return (
    <div className={styles.post}>
      <AdvancedTitle 
        styling="postBlockTitle">
        {post.title ? post.title : 'Вы ещё не рассказали ни одной истории'}
      </AdvancedTitle>
      {post.title
        && <>
            <p className={styles.postDescription}>{post.description}</p>
            <img src={post.image} alt='' className={styles.postImage}/>
            <p className={styles.postTags}>#{post.hashtag.split(/\s+|,\s+|,+/gi).join(' #')}</p>
          </>
      }    
    </div>
  );
}

export default PostBlock;