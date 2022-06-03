import styles from './footer.module.css';
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div>
        Travellers Club &copy; 2022. All rights reserved.
        <span className={styles['slash']}>|</span>
        This is a website built to be part of a front end developer portfolio. You can check the <a href="https://github.com/Diego-Luiz/travel-blog" className={styles['gitword']}>Github files here</a> and know more about it.
      </div>
      <SocialMedia />
    </footer>
  );
}

export default Footer;