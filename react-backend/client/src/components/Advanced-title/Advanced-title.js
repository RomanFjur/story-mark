import React from 'react';
import styles from './Advanced-title.module.css';

const AdvancedTitle = ({styling, children}) => {
  return (
    <>
      <p className={styles[styling]}>{children}</p>
    </>
  );
}

export default AdvancedTitle;