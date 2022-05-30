import React from 'react';

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
import pageBackground from '../../assets/images/photo-video-page-background.jpg';
import article1 from '../../assets/images/articlephotovideo1.jpg';
import article2 from '../../assets/images/articlephotovideo2.jpg';
import article3 from '../../assets/images/articlephotovideo3.jpg';
import article4 from '../../assets/images/articlephotovideo4.jpg';
import post1 from '../../assets/images/place-grid.jpg';
import post2 from '../../assets/images/tips-grid-2.jpg';
import post3 from '../../assets/images/tips-grid-3.jpg';
import post4 from '../../assets/images/tips-grid-4.jpg';

const PhotoAndVideo = ({ headerHeight, postModalActive, handleTogglePostModal }, ref) => {
  const SubSectionArticles = [
    {
      id: 1,
      title: 'The best cameras to travel',
      imageSrc: article1
    },
    {
      id: 2,
      title: 'The perfect drone to take in your adventures',
      imageSrc: article2
    },
    {
      id: 3,
      title: 'The camera stabilizer to travel in this 2022',
      imageSrc: article3
    },
    {
      id: 4,
      title: 'Do not let your phone die: Powerbank battery charger',
      imageSrc: article4
    },
    {
      id: 5,
      title: 'The best cameras to travel',
      imageSrc: article1
    },
    {
      id: 6,
      title: 'The perfect drone to take in your adventures',
      imageSrc: article2
    },
    {
      id: 7,
      title: 'The camera stabilizer to travel in this 2022',
      imageSrc: article3
    },
    {
      id: 8,
      title: 'Do not let your phone die: Powerbank battery charger',
      imageSrc: article4
    },
    {
      id: 9,
      title: 'The best cameras to travel',
      imageSrc: article1
    },
    {
      id: 10,
      title: 'The perfect drone to take in your adventures',
      imageSrc: article2
    },
    {
      id: 11,
      title: 'The camera stabilizer to travel in this 2022',
      imageSrc: article3
    },
    {
      id: 12,
      title: 'The best cameras to travel',
      imageSrc: article4
    },
    {
      id: 13,
      title: 'The best cameras to travel',
      imageSrc: article1
    },
    {
      id: 14,
      title: 'The perfect drone to take in your adventures',
      imageSrc: article2
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
      <SectionBackground src={pageBackground}/>
      <IntroView 
        title={'Photo and Video about travels'}
        description={'Cameras, Objectives and Edition Tools'}
        height={headerHeight}
      />
      <section
        ref={ref}
      >
        <SectionContainer>
          <SlashedTitle
            specificSection={true}
            TitleLevel={'h2'}
          >
            Tricks and Tips
          </SlashedTitle>
          <SectionDescriptionTitle>Photos and videos about travels</SectionDescriptionTitle>
          <SectionDescription>
            <p>A space for those who love photography and video edition about travels. We will talk about the best cameras and objectives to travel, editing tools, tips, tricks and much more. We will share our videos and invite you to know the video creators.</p>
            <p>If you are a travel content creator here we give you a space to share your work with us and all our community.</p>
          </SectionDescription>
        </SectionContainer>
      </section>
      <DotContentDivider />
      <SubSectionWithArticles 
        sectionDescription={'Tips and Tricks'}
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

export default React.forwardRef(PhotoAndVideo);