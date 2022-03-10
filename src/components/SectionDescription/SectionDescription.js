import styles from './sectiondescription.module.css';

const SectionDescription = ({ children }) => {
  return (
    <p className={styles['section-description']}>{children}</p>
  )
}

export default SectionDescription;