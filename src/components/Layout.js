import React from 'react';
import { Outlet } from 'react-router-dom';

import { 
  Header, 
  Footer, 
  BtnScrollTop 
} from '.';

const Layout = React.forwardRef((props, ref) => (
  <>
    <Header ref={ref} />
    <BtnScrollTop />
    <Outlet />
    <Footer />
  </>
));

export default Layout;