import React from 'react';
import styles from './Avatar-block.module.css';

const AvatarBlock = ({avatar, avatarStyle = styles.userAvatar}) => {
  return (
    <img src={avatar} alt='' className={avatarStyle}/>
  );
}

export default AvatarBlock;