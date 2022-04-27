import styles from './subsectiontitle.module.css';

const SubSectionTitle = ({ TitleLevel='h2', children }) => {
  return (
    <TitleLevel 
      className={styles['title']}
    >
      {children}
    </TitleLevel>
  );
}

export default SubSectionTitle;