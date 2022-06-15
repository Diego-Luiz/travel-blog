import React from 'react';
import { Link } from 'react-router-dom';

import styles from './subsectionarticle.module.css';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
class SubSectionArticle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contentLoaded: false
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }
  handleImageLoaded(){
    this.setState({ contentLoaded: true });
  }
  render(){
    const { contentLoaded } = this.state;
    const { article, TitleLevel } = this.props;
    return (
      <Link 
        to=''
        className={styles['link']}
      >
        <article
          className={styles['article']}
        >
          <div className={styles['img-box']}>
            {!contentLoaded && 
              <SkeletonLoader 
                type='image'
              />
            }
            <img 
              src={article.imageSrc}
              alt={''}
              className={[
                styles['article__img'],
                `${!contentLoaded ? styles['--not-visible']: ''}`
              ].join(' ')}
              onLoad={this.handleImageLoaded}
            />
          </div>
          <TitleLevel
            className={styles['article__title']}
          >
            {!contentLoaded && 
              <SkeletonLoader 
                type='title'
              />
            }
            {contentLoaded && article.title}
          </TitleLevel>
          { article.content && <p className={styles['article__content']}>
            {!contentLoaded && 
              <SkeletonLoader 
                type='content'
              />
            }
            {contentLoaded && article.content}
          </p>}
        </article>
      </Link>
    );

  }
}

export default SubSectionArticle;