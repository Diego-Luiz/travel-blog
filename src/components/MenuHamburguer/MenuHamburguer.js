import styles from './menuhamburguer.module.css';

const MenuHamburguer = ({ menuStatus, firstSectionIntersected, headerWhiteColorBlack }) => {
  
  return (
    <div 
      role='presentation'
      className={[
        `${styles['box']}`, 
        `${styles[menuStatus]}`, 
        styles[`${firstSectionIntersected ? '--fstSectionIntersected': ''}`],
        `${headerWhiteColorBlack ? styles['--headerWhiteColorBlack']: ''}`
        ].join(' ')}
    >
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      
    </div>
  );
}

export default MenuHamburguer;