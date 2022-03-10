import { Link } from "react-router-dom";
import { 
  FaGithub, 
  FaInstagram, 
  FaTwitter 
} from "react-icons/fa";

import styles from './socialmedia.module.css';

const SocialMedia = () => {
  return (
    <ul className={styles['list']}>
      <li>
        <Link to='/' className={styles['list__link']}>
          <span className="sr-only">Github</span>
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link to='/' className={styles['list__link']}>
          <span className="sr-only">Instagram</span>
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link to='/' className={styles['list__link']}>
          <span className="sr-only">Instagram</span>
          <FaTwitter />
        </Link>
      </li>
    </ul>
  )
}

export default SocialMedia;