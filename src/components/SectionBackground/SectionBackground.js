import styles from './sectionbackground.module.css';

const SectionBackground = ({src}) => {
  const styleBackgroundImage = { backgroundImage: `url(${src})` };
  return (
    <div 
      className={styles['section-background']}
      style={styleBackgroundImage}
    ></div>
  );
}

export default SectionBackground;