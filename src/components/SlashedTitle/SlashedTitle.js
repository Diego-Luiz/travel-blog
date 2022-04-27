import styles from './slashedtitle.module.css';

const SlashedTitle = ({ TitleLevel, children, specificSection=false }) => {
  return (
    <TitleLevel
      className={[styles['slashed-title'], `${specificSection ? styles['--specific-section'] : ''}`].join(' ')}
    >
      {children}
    </TitleLevel>
  
  );
}

export default SlashedTitle;