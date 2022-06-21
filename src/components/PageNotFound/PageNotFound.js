import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

import styles from './pagenotfound.module.css';

const PageNotFound = ({ headerHeight }) => {
  const containerHeight = `calc(100vh - ${headerHeight}px)`;
  return (
    <div 
      className={styles['container']}
      style={{height: containerHeight}}
    >
      <h2 className={styles['title']}>Page not found</h2>
      <p className={styles['description']}>The page you were looking for could not be found. It might have been removed or renamed. Make sure it is spelled correctly.</p>
      <div>
        <HiHome />
        <Link to='/' className={styles['link-homepage']}>Go to home page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;