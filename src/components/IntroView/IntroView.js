import styles from './introview.module.css';

const IntroView = ({ title, description }) => {
  return (
    <div className={styles['intro-view']}>
      <h2 className={styles['intro-view__title']}>{title}</h2>
      <p className={styles['intro-view__description']}>{description}</p>
    </div>
  )
}

export default IntroView;