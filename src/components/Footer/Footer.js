import { Link } from "react-router-dom";

import styles from './footer.module.css';
import SocialMedia from "../SocialMedia/SocialMedia";
const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Travellers Club &copy; 2022. All rights reserved.
      <span className={styles['slash']}>|</span>
      <a href="https://www.google.com/" className={styles['gitword']}>Visit the Github files about this website.</a>
      <SocialMedia />
    </footer>
  );
}

export default Footer;