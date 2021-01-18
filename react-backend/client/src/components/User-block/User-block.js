import React from 'react';
import styles from './User-block.module.css';
import AvatarBlock from '../Avatar-block/Avatar-block';

const UserBlock = ({name, email, avatar, onClick}) => {
  return (
    <div className={styles.userBlock} onClick={onClick}>
      <div className={styles.userName}>{name}</div>
      <AvatarBlock avatar={avatar}/>
    </div>
  );
}

export default UserBlock;