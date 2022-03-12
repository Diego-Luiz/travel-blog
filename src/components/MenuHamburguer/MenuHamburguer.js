import styles from './menuhamburguer.module.css';

const MenuHamburguer = ({ menuStatus }) => {
  
  return (
    <div 
      role='presentation'
      className={[`${styles['box']}`, `${styles[menuStatus]}`].join(' ')}
    >
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      <div className={styles['bar']}></div>
      
    </div>
  );
}

export default MenuHamburguer;