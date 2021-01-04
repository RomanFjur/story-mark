import React from 'react';
import styles from './Button.module.css';

const Button = ({children, type}) => {
  return (
    <button className={styles[type]} type={type}>{children}</button>
  );
}

export default Button;