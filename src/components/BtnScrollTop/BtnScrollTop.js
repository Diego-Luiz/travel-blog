import { FaArrowUp } from 'react-icons/fa';

import styles from './btnscrolltop.module.css';

const BtnScrollTop = ({ firstSectionIntersected, toggleMenu }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <button
      type='button'
      className={
        [ styles['btn'], 
          styles[`${firstSectionIntersected ? '--fstSectionIntersected': ''}`],
          styles[`${toggleMenu ? '--menu-active': ''}`]
        ].join(' ')
      }
      onClick={handleClick}
    >
      <span className='sr-only'>Scroll to the top of the page</span>
      <FaArrowUp />
    </button>
  );
}

export default BtnScrollTop;
