import styles from './loadinganimation.module.css';

const LoadingAnimation = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['spinner']}></div>
      <span className={styles['content']}>Loading</span>
    </div>
  );
};

export default LoadingAnimation;