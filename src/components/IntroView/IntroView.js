import React from 'react';
import styles from './introview.module.css';

const IntroView = ({ title, description, height }) => {
  return (
    <div 
      className={styles['intro-view']}
      style={{ 
        height: `calc(100vh - ${height}px)`,
        paddingTop: `${height}px`
      }}
    >
      <h2 className={styles['intro-view__title']}>{title}</h2>
      <p className={styles['intro-view__description']}>{description}</p>
    </div>
  );
}

export default IntroView;