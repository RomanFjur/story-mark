import React from 'react';
import styles from './User-block.module.css';

const UserBlock = ({name, email}) => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.userName}>{name}</div>
      <div className={styles.userAvatar}><img src="" alt=''/></div>
    </div>
  );
}

export default UserBlock;