import styles from './menuhamburguer.module.css';

const MenuHamburguer = ({ menuStatus, firstSectionIntersected }) => {
  
  return (
    <div 
      role='presentation'
      className={[`${styles['box']}`, `${styles[menuStatus]}`, styles[`${firstSectionIntersected ? '--fstSectionIntersected': ''}`]].join(' ')}
    >
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      
    </div>
  );
}

export default MenuHamburguer;