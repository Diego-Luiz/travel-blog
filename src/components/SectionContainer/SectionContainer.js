import styles from './sectioncontainer.module.css';

const SectionContainer = ({ children, autoHeight=false }) => {
  return (
    <div 
      className={[styles['container'], `${autoHeight ? styles['--auto-min-height']: ''}`].join(' ')}
    >{children}</div>
  );
}

export default SectionContainer;