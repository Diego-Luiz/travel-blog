import React from 'react';
import { Outlet } from 'react-router-dom';

import { 
  Header, 
  Footer, 
  BtnScrollTop 
} from '.';

const Layout = ({ firstSectionIntersected, handleToggleMenu, toggleMenu, headerHeight }, ref) => (
  <>
    <Header 
      firstSectionIntersected={firstSectionIntersected} 
      handleToggleMenu={handleToggleMenu}
      toggleMenu={toggleMenu}
      headerHeight={headerHeight}
      ref={ref}   
    />
    <BtnScrollTop 
      firstSectionIntersected={firstSectionIntersected}
      toggleMenu={toggleMenu}
    />
    <Outlet />
    <Footer />
  </>
);

export default React.forwardRef(Layout);