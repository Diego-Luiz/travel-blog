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
import {
  SubSectionArticles, 
  Posts 
} from '../../data/postsPhotoVideo';

const PhotoAndVideo = ({ headerHeight, postModalActive, handleTogglePostModal }, ref) => {
  return (
    <>
      <SectionBackground src={pageBackground}/>
      <IntroView 
        title={'Photo and Video about travels'}
        description={'Cameras, Objectives and Edition Tools'}
        height={headerHeight}
      />
      <section
        ref={ref.firstSectionRef}
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
          ref={ref.postModalRef}
        />
      </SectionContainer>
    </>
  );
};

export default React.forwardRef(PhotoAndVideo);