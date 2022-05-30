import styles from './menuhamburguer.module.css';

const MenuHamburguer = ({ menuStatus, firstSectionIntersected, isInAboutSection }) => {
  
  return (
    <div 
      role='presentation'
      className={[
        `${styles['box']}`, 
        `${styles[menuStatus]}`, 
        styles[`${firstSectionIntersected ? '--fstSectionIntersected': ''}`],
        `${isInAboutSection ? styles['--isInAboutSection']: ''}`
        ].join(' ')}
    >
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      
    </div>
  );
}

export default MenuHamburguer;