import styles from './sectiondescriptiontitle.module.css';

const SectionDescriptionTitle = ({ children }) => {
  return (
    <p className={styles['title']}>{children}</p>
  );
}

export default SectionDescriptionTitle;