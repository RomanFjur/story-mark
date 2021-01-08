import React from 'react';
import styles from './Button.module.css';

const Button = ({children, type, disabled}) => {
  return (
    <button className={disabled ? styles.disButton : styles[type]} type={type} disabled={disabled}>{children}</button>
  );
}

export default Button;