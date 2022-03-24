import React from 'react';

import styles from './tips.module.css';
import homePageBackground from '../../assets/images/homepage-background.jpg';
import { IntroView, SectionBackground, SectionDescription, SlashedTitle } from '../../components';

const Tips = ({ headerHeight }, ref) => {
  return (
    <>
      <SectionBackground src={homePageBackground}/>
      <IntroView 
        title={'Tips for travelers'}
        description={'Those we would like to know before the adventures'}
        height={headerHeight}
      />
      <section ref={ref}>
        <SlashedTitle titleLevel={'h2'}>Travelers Tips</SlashedTitle>
        <p>Tips for travelers</p>
        <SectionDescription>
          Text
        </SectionDescription>
      </section>
    </>
  );
};

export default React.forwardRef(Tips);
