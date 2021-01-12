import React from 'react';
import styles from './Main-title.module.css';

const MainTitle = ({styling, children}) => {
  return (
    <>
      <h3 className={styles[styling]}>{children}</h3>
    </>
  );
}

export default MainTitle;