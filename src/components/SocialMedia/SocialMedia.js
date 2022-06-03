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
        <a href='https://github.com/Diego-Luiz/travel-blog' className={styles['list__link']}>
          <span className="sr-only">Github</span>
          <FaGithub />
        </a>
      </li>
      <li>
        <Link to='/' className={styles['list__link']}>
          <span className="sr-only">Instagram</span>
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link to='/' className={styles['list__link']}>
          <span className="sr-only">Twitter</span>
          <FaTwitter />
        </Link>
      </li>
    </ul>
  )
}

export default SocialMedia;