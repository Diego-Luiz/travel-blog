import React from 'react';
import ReactDom from 'react-dom';
import { IoMdClose } from 'react-icons/io';

import styles from './postmodal.module.css';

const PostModal = ({ post, handleClick }) => {
  return (
    ReactDom.createPortal(
      <div className={styles['container']}>
       <div className={styles['content']}>
        <button
          type='button'
          className={styles['btn-close']}
          onClick={handleClick.bind(this, 'close')}
        >
          <IoMdClose />
        </button>
        
        <div className={styles['img-container']}>
          <button
            type='button'
            className={styles['btn-back']}
            onClick={handleClick.bind(this, 'back')}
          >
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
            <span aria-hidden='true' className={styles['arrow-icon']}>&#62;</span>
          </button>
        </div>
       </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};

export default PostModal;