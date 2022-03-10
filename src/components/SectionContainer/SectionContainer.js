import styles from './sectioncontainer.module.css';

const SectionContainer = ({ children }) => {
  return (
    <div className={styles['container']}>{children}</div>
  );
}

export default SectionContainer;