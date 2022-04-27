import styles from './dotcontentdivider.module.css';
import SectionContainer from '../SectionContainer/SectionContainer';

const DotContentDivider = () => {
  return (
    <SectionContainer autoHeight={true}>
      <div role='presentation' className={styles['divider']}></div>
    </SectionContainer>
  );
}

export default DotContentDivider;