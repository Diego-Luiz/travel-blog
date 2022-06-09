import React from 'react';
import ReactDom from 'react-dom';

import styles from './postmodal.module.css';

const PostModal = ({ post, handleClick }, ref) => {
  return (
    ReactDom.createPortal(
      <div className={styles['container']}>
       <div className={styles['content']}>
        <button
          type='button'
          className={styles['btn-close']}
          onClick={handleClick.bind(this, 'close')}
          ref={ref}
        >
          <span className='sr-only'>Close image view</span>
          <span aria-hidden='true'>x</span>
        </button>
        
        <div className={styles['img-container']}>
          <button
            type='button'
            className={styles['btn-back']}
            onClick={handleClick.bind(this, 'back')}
          >
            <span className='sr-only'>Back to previous image</span>
            <span aria-hidden='true' className={styles['arrow-icon']}>&#60;</span>
          </button>
          <img 
            src={post}
            alt=''
            className={styles['img']}
          />
          <button
            type='button'
            className={styles['btn-fwd']}
            onClick={handleClick.bind(this, 'fwd')}
          >
            <span className='sr-only'>Forward to next image</span>
            <span aria-hidden='true' className={styles['arrow-icon']}>&#62;</span>
          </button>
        </div>
       </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};

export default React.forwardRef(PostModal);