import styles from './btnscrolltop.module.css';

const BtnScrollTop = () => {
  return (
    <button
      type='button'
      className={styles['btn']}
    >
      <span>Scroll to the top of the page</span>
    </button>
  );
}

export default BtnScrollTop;
