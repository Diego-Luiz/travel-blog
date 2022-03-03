import styles from './slashedtitle.module.css';

const SlashedTitle = ({ titleLevel, children }) => {
  const getCorrespondingElement = () => {
    switch(titleLevel){
      case 'h1':
        return (
          <h1 className={styles['slashed-title']}>
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2 className={styles['slashed-title']}>
            {children}
          </h2>
        );
      case 'h3':
        return (
          <h3 className={styles['slashed-title']}>
            {children}
          </h3>
        );
      case 'h4':
        return (
          <h4 className={styles['slashed-title']}>
            {children}
          </h4>
        );
      case 'h5':
        return (
          <h5 className={styles['slashed-title']}>
            {children}
          </h5>
        );
      case 'h6':
        return (
          <h6 className={styles['slashed-title']}>
            {children}
          </h6>
        );
    }
  }
  return (
    <>
      { getCorrespondingElement()}
    </>
  );
}

export default SlashedTitle;