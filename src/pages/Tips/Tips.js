import React from 'react';

import styles from './tips.module.css';
import { 
  DotContentDivider, 
  IntroView, 
  PostsGrid, 
  SectionBackground, 
  SectionContainer, 
  SectionDescription, 
  SectionDescriptionTitle, 
  SlashedTitle, 
  SubSectionWithArticles 
} from '../../components';
import tipsPageBackground from '../../assets/images/tips-background.jpg';
import healthCare from '../../assets/images/healthcare-recomendations.jpg';
import infoSecurity from '../../assets/images/information-security.jpg';
import post1 from '../../assets/images/place-grid.jpg';
import post2 from '../../assets/images/tips-grid-2.jpg';
import post3 from '../../assets/images/tips-grid-3.jpg';
import post4 from '../../assets/images/tips-grid-4.jpg';

const Tips = ({ headerHeight, handleTogglePostModal, postModalActive }, ref) => {
  const SubSectionArticles = [
    {
      id: 1,
      title: 'Healthcare recomendations while you are staying and how to avoid risks of contagion',
      imageSrc: healthCare,
      content: 'Some important healthcare recomendations while you are staying that can help you'
    },
    {
      id: 2,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 3,
      title: 'Healthcare recomendations while you are staying and how to avoid risks of contagion',
      imageSrc: healthCare,
      content: 'Some important healthcare recomendations while you are staying that can help you'
    },
    {
      id: 4,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 5,
      title: 'Healthcare recomendations while you are staying and how to avoid risks of contagion',
      imageSrc: healthCare,
      content: 'Some important healthcare recomendations while you are staying that can help you'
    },
    {
      id: 6,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 7,
      title: 'Healthcare recomendations while you are staying and how to avoid risks of contagion',
      imageSrc: healthCare,
      content: 'Some important healthcare recomendations while you are staying that can help you'
    },
    {
      id: 8,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 9,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: healthCare
    },
    {
      id: 10,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 11,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: healthCare
    },
    {
      id: 12,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 13,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: healthCare
    },
    {
      id: 14,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: infoSecurity
    },
    {
      id: 15,
      title: 'Avoid your data from being stolen during your travel. How to protect yourself from the new hacking method?',
      imageSrc: healthCare
    }
  ];
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
      <SectionBackground src={tipsPageBackground}/>
      <IntroView 
        title={'Tips for travelers'}
        description={'Those we would like to know before our adventures'}
        height={headerHeight}
      />
      <section 
        className={styles['description']}
        ref={ref}
      >
        <SectionContainer>
          <SlashedTitle 
            specificSection={true}
            TitleLevel={'h2'}
          >
            Travellers Tips
          </SlashedTitle>
          <SectionDescriptionTitle>Tips for Travellers</SectionDescriptionTitle>
          <SectionDescription>
            <p>When the moment of planning and organizing your travel becomes, you will need information about how to reserve flights, in which hotels to stay, for example. That is the moment we decide to search for information and experiences some traveller had already had about the place we intend to go, so basically this is what we have been doing all these years: collecting experiences and information to help you.</p>
            <p>We created the Traveller's Club to share our experiences and put our little help. We also would like to thank all the other people that helped us with other experiences and tips that we have been receiving along the years. We hope these tips can help you.</p>
          </SectionDescription>
        </SectionContainer>
      </section>
      <DotContentDivider />
      <SubSectionWithArticles 
        sectionDescription={'Tips for travellers'}
        articles={SubSectionArticles}
        articlesPView={8}
      />
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

export default React.forwardRef(Tips);
