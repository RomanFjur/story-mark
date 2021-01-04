import React from 'react';
import styles from './Form-title.module.css';

const FormTitle = ({title, desc}) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default FormTitle;