import React from 'react';
import styles from './Button.module.css';

const Button = ({children, type, disabled, styling, onClick}) => {
  return (
    <button 
      className={disabled ? styles.disButton : styles[styling]} 
      type={type} 
      disabled={disabled} 
      onClick={onClick}>{children}</button>
  );
}

export default Button;