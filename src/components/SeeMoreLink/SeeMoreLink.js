import { Link } from 'react-router-dom';

import styles from './seemorelink.module.css';

const SeeMoreLink = ({ reference, children }) => {
  return (
    <Link 
      to={reference}
      className={styles['link']}
    >
      {children}
    </Link>
  );
}

export default SeeMoreLink;