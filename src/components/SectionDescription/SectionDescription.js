import styles from './sectiondescription.module.css';

const SectionDescription = ({ children }) => {
  return (
    <div className={styles['section-description']}>{children}</div>
  )
}

export default SectionDescription;