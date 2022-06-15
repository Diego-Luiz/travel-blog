import React from 'react';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

import styles from './postgrid.module.css';

class PostGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageLoaded: false
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }
  handleImageLoaded(){
    this.setState({ imageLoaded: true });
  }
  render(){
    const { imageLoaded } = this.state;
    const { handleClick, imageSrc } = this.props;
    return (
      <button 
        className={styles['btn-container']}
        onClick={handleClick}
      >
        {!imageLoaded && 
          <SkeletonLoader 
            type='image-grid'
          />
        }
        <img 
          src={imageSrc}
          alt=''
          className={[
            styles['img'],
            `${!imageLoaded ? styles['--not-loaded']: ''}`
          ].join(' ')}
          onLoad={this.handleImageLoaded}
        />
      </button>
    );
  }
}

export default PostGrid;