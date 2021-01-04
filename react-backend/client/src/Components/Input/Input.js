import React from 'react';
import styles from './Input.module.css';

const Input = ({title, type, id, error, touched, fieldProps}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {title}
        <input
          type={id === 'password' ? id : type}
          className={touched && error ? styles.inputError : styles.input} 
          {...fieldProps} />
        {touched && error ? <div className={styles.textError}>{error}</div> : null}
      </label>
    </>
  );
}

export default Input;
