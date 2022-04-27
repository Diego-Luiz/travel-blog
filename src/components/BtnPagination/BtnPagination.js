
import styles from './btnpagination.module.css';

const BtnPagination = ({ handleClick, btnIndex, active=false }) => {
  return (
    <button
      type='button'
      onClick={handleClick}
      className={[styles['button'], `${active ? styles['--active']: ''}`].join(' ')}
    >
      <span className='sr-only'>Show part </span>
      {btnIndex}
      <span className='sr-only'> of the articles</span>
    </button>
  );
}

export default BtnPagination;