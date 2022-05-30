import React from 'react';

import styles from './about.module.css';
import ourImg from '../../assets/images/imgaboutus.jpg';
import post1 from '../../assets/images/place-grid.jpg';
import post2 from '../../assets/images/tips-grid-2.jpg';
import post3 from '../../assets/images/tips-grid-3.jpg';
import post4 from '../../assets/images/tips-grid-4.jpg';
import { PostsGrid, SectionContainer } from '../../components';

const About = ({ headerHeight, postModalActive, handleTogglePostModal }, ref) => {
  const Posts = [
    {
      id: 1,
      src: post1
    },
    {
      id: 2,
      src: post2
    },
    {
      id: 3,
      src: post3
    },
    {
      id: 4,
      src: post4
    },
    {
      id: 5,
      src: post1
    },
    {
      id: 6,
      src: post2
    },
    {
      id: 7,
      src: post3
    },
    {
      id: 8,
      src: post4
    },
    {
      id: 9,
      src: post1
    },
    {
      id: 10,
      src: post2
    }
  ];
  return (
    <>
      <div 
        className={styles['welcome-container']}
        style={{marginTop: `${headerHeight}px`}}
      >
        <div className={styles['img-box']}>
          <img 
            src={ourImg}
            alt=''
            className={styles['img']}
          />
        </div>
        <p
          className={styles['welcome-msg']}
        >
          Welcome to our band
        </p>
        <h2 className={styles['impact-text']}>
          There is a big world. Come explore it with us.
        </h2>
      </div>
      <div className={styles['text-container']}>
        <p className={styles['text']} ref={ref}>
          If you have arrived here is because we share the same love. We travel to listen to histories, to live unusual experiences and to be surprised by the incredible natural landscapes. Travellers Club was born in 2019 and is the history about our travels experiences. Moments, people and places that marked our life.
        </p>
        <p className={styles['text']}>
          When the moment to plan your travel arrives you need information about how to make flight reservations, in which place to stay, etc. There is the time when we usually search about some people experiences about where we intend to go, and then we can take our doubts. Here you can find some useful information that can help you!
        </p>
        <p className={styles['text']}>
          Hello we are Mary and Kevin! We created Travellers Club to share our experiences and also to thank to all those who shared with us their experiences, tips, etc.
        </p>
        <p className={styles['text']}>
          An open community where you are very welcome!
        </p>
      </div>
      <SectionContainer>
        <PostsGrid 
          posts={Posts}
          postModalActive={postModalActive}
          handleTogglePostModal={handleTogglePostModal}
        />
      </SectionContainer>
    </>
  );
};

export default React.forwardRef(About);