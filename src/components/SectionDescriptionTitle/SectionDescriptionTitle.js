import styles from './sectiondescriptiontitle.module.css';

const SectionDescriptionTitle = ({ children }) => {
  return (
    <p className={styles['desc-title']}>{children}</p>
  );
}

export default SectionDescriptionTitle;