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
import { SubSectionArticles, Posts } from '../../data/postsTips';

const Tips = ({ headerHeight, handleTogglePostModal, postModalActive }, ref) => {
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
        ref={ref.firstSectionRef}
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
          ref={ref.postModalRef}
        />
      </SectionContainer>
    </>
  );
};

export default React.forwardRef(Tips);
