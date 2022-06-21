import React from 'react';
import { Outlet } from 'react-router-dom';

import { 
  Header, 
  Footer, 
  BtnScrollTop
} from '.';

const Layout = ({ firstSectionIntersected, handleToggleMenu, toggleMenu, headerHeight, headerWhiteColorBlack }, ref) => (
  <>
    <Header 
      firstSectionIntersected={firstSectionIntersected} 
      headerWhiteColorBlack={headerWhiteColorBlack}
      handleToggleMenu={handleToggleMenu}
      toggleMenu={toggleMenu}
      headerHeight={headerHeight}
      ref={ref}   
    />
    <BtnScrollTop 
      firstSectionIntersected={firstSectionIntersected}
      toggleMenu={toggleMenu}
    />
    <main className='main-content'>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default React.forwardRef(Layout);