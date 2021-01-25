import React from 'react';
import styles from './Analytics.module.css';

import MainTitle from '../Main-title/Main-title';
import AdvancedTitle from '../Advanced-title/Advanced-title';
import Button from '../Button/Button';

const Analytics = ({title, desc, onClick}) => {
  return (
    <div className={styles.analytics}>
      <div className={styles.analyticsTitle}>
        <MainTitle styling='analyticsTitle'>{title}</MainTitle>
        <AdvancedTitle styling='analyticsTitle'>{desc}</AdvancedTitle>
      </div>
      <Button 
        styling='open' 
        type='submit' 
        onClick={onClick}>Open</Button>
    </div>
  );
}

export default Analytics;