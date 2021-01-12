import React from 'react';
import styles from './Form-title.module.css';

import MainTitle from '../Main-title/Main-title';
import AdvancedTitle from '../Advanced-title/Advanced-title';

const FormTitle = ({title, desc, titleStyle, descStyle, styling}) => {
  return (
    <div className={styles[styling]}>
      <MainTitle styling={titleStyle}>{title}</MainTitle>
      <AdvancedTitle styling={descStyle}>{desc}</AdvancedTitle>
    </div>
  );
}

export default FormTitle;