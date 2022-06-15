import styles from './skeletonloader.module.css';

const SkeletonLoader = ({ type }) => {
  return (
    <span 
      className={[styles['container'], styles[`--${type}`]].join(' ')}
      role='presentation'
    >  
    </span>
  );
};

export default SkeletonLoader;