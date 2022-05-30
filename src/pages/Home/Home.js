import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.css';
import { 
  IntroView, 
  SectionBackground,
  ArticlesSection,
  SeeMoreLink,
  SlashedTitle,
  SectionDescription,
  SectionContainer,
  ArticleWithDate
} from '../../components';
import homePageBackground from '../../assets/images/homepage-background.jpg';
import mountainImg from '../../assets/images/mountain-img.jpg'; 
import hotelImg from '../../assets/images/hotel-img.jpg';
import instagramArticleImg from '../../assets/images/lightravel-instagram.jpg';

const Home = ({ headerHeight }, ref) => {
  const LastDestinationsArticles = [
    {
      id: 1,
      title: 'Routes in the Sintra Palaces in Portugal',
      destination: 'Portugal',
      image: `${mountainImg}`
    },
    {
      id: 2,
      title: 'Hotels and SPA in Andorra, our experience',
      destination: 'Andorra',
      image: `${hotelImg}`
    },
    {
      id: 3,
      title: 'Routes in the Sintra Palaces in Portugal',
      destination: 'Portugal',
      image: `${mountainImg}`
    },
    {
      id: 4,
      title: 'Hotels and SPA in Andorra, our experience',
      destination: 'Andorra',
      image: `${hotelImg}`
    }
  ]
  return (
    <>
      <SectionBackground src={homePageBackground}/>
      <IntroView 
        title={'Welcome to the Club'}
        description={'Destinations and Tips, Photos and Videos'} 
        height={headerHeight}
      />
      <section className={styles['last-destinations']} ref={ref}>
        <SectionContainer>
          <h3 className={styles['last-destinations__title']}>Last destinations</h3>
          <ArticlesSection articles={LastDestinationsArticles}/>
          <SeeMoreLink reference='/'>See more</SeeMoreLink>
        </SectionContainer>
      </section>
      <section className={styles['about-section']}>
        <SectionContainer
          autoHeight={true}
        >
          <h3 className={styles['about-section__title']}>There is a big world to discover. Come explore with us!</h3>
          <div className={styles['about-section__about-us']}>
            <h4 className={styles['title']}>About us</h4>
            <p className={styles['content']}>Travellers Club is the history about our travels adventures. The heart touching moments, people we have met and their grown-up places. Come to know more about us!</p>
            <Link 
              to='/about' 
              className={styles['link']}
            >
              More about us
            </Link>
          </div>
        </SectionContainer>
      </section>
      <section className={styles['photo-video-section']}>
        <SectionContainer>
          <SlashedTitle TitleLevel='h3'>Travel Video & Photo</SlashedTitle>
          <SectionDescription>Here you will find tools, tips and self experience to people like you, with passion and love for videos and photos and the travel images.</SectionDescription>
          <div className={styles['articles']}>
            <div className={styles['articles__hightlights']}>
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
                highlight={true}
              />
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
                highlight={true}
              />
            </div>
            <div className={styles['articles__no-hightlights']}>
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
              />
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
              />
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
              />
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
              />
              <ArticleWithDate 
                imageSrc={instagramArticleImg}
                date='01.05.2022'
                title='The bests Lightroom presets for travel your Instagram'
              />
            </div>
          </div>
          <SeeMoreLink reference='/photoandvideo'>See more</SeeMoreLink>
        </SectionContainer>
      </section>
      <section className={styles['tips-section']}>
        <SectionContainer>
          <div>
            <SlashedTitle TitleLevel='h3'>Tips</SlashedTitle>
            <SectionDescription>Those that we would like to receive before our travels. Besides our own tips, we also thanks other people who contributed with some tip.</SectionDescription>
          </div>
          <div className={styles['tips-article']}>
            <ArticlesSection articles={LastDestinationsArticles}/>
            <SeeMoreLink  reference='/tips'>See more</SeeMoreLink>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}

export default React.forwardRef(Home);