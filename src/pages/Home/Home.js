import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.css';
import { 
  IntroView, 
  SectionBackground,
  ArticlesSection,
  SeeMoreLink,
  SlashedTitle
} from '../../components';
import homePageBackground from '../../assets/images/homepage-background.jpg';
import mountainImg from '../../assets/images/mountain-img.jpg'; 
import hotelImg from '../../assets/images/hotel-img.jpg';

const Home = () => {
  const LastDestinationsArticles = [
    {
      id: 1,
      title: 'Routes in the Sintra Palaces in Portugal',
      image: `${mountainImg}`
    },
    {
      id: 2,
      title: 'Hotels and SPA in Andorra, our experience',
      image: `${hotelImg}`
    },
    {
      id: 3,
      title: 'Routes in the Sintra Palaces in Portugal',
      image: `${mountainImg}`
    },
    {
      id: 4,
      title: 'Hotels and SPA in Andorra, our experience',
      image: `${hotelImg}`
    }
  ]
  return (
    <>
      <SectionBackground src={homePageBackground}/>
      <IntroView 
        title={'Welcome to the Club'}
        description={'Destinations and Tips, Photos and Videos'} 
      />
      <section className={styles['last-destinations']}>
        <h3 className={styles['last-destinations__title']}>Last destinations</h3>
        <ArticlesSection articles={LastDestinationsArticles}/>
        <SeeMoreLink reference='/'>See more</SeeMoreLink>
      </section>
      <section className={styles['about-section']}>
        <h3 className={styles['about-section__title']}>There is a big world to discover. Come explore with us!</h3>
        <div className={styles['about-section__about-us']}>
          <h4 className={styles['title']}>About us</h4>
          <p className={styles['content']}>Travellers Club is the history about our travels adventures. The heart touching moments, people we have met and their grown-up places. Come to know more about us!</p>
          <Link 
            to='/' 
            className={styles['link']}
          >
            More about us
          </Link>
        </div>
      </section>
      <section className={styles['photo-video-section']}>
        <SlashedTitle titleLevel='h3'>Travel Video & Photo</SlashedTitle>
        <p>Here you will find tools, tips and self experience to people like you, with passion and love for videos and photos and the travel images.</p>
        <div className={styles['articles']}>
          <article>
            <img />
            <p>01.05.2022</p>
            <h4>The bests Lightroom presets for travel your Instagram</h4>
          </article>
        </div>
        <SeeMoreLink reference='/'>See more</SeeMoreLink>
      </section>
      <section className={styles['tips-section']}>
        <div>
          <SlashedTitle titleLevel='h3'>Tips</SlashedTitle>
          <p>Those that we would like to receive before our travels. Besides our own tips, we also thanks other people who contributed with some tip.</p>
        </div>
        <div className={styles['tips-article']}>
          <article>
            <img />
            <h4>
              <Link to='/'>
                Prevent data stealing from your phone while traveling
              </Link>
            </h4>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;