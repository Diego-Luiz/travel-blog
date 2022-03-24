import { Link } from 'react-router-dom';

import styles from './mainnavlink.module.css';

const MainNavLink = ({ label, path }) => {
  return (
    <Link 
      to={path} 
      className={styles['link']}
    >
      {label}
    </Link>
  );
}

export default MainNavLink;