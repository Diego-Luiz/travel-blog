import React, 
{ Suspense,
  lazy
} from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import './styles/normalize.css';
import './styles/global.css';
import appWithUseLocationHOC from './hocs/appWithUseLocationHOC';
import { 
  Layout,
  LoadingAnimation 
} from './components';

const Home = lazy(() => import('./pages/Home/Home'));
const Tips = lazy(() => import('./pages/Tips/Tips'));
const PhotoAndVideo = lazy(() => import('./pages/PhotoAndVideo/PhotoAndVideo'));
const About = lazy(() => import('./pages/About/About'));
const PageNotFound = lazy(() => import('./components/PageNotFound/PageNotFound'));

class App extends React.Component{
  constructor(props){
    super(props);
    this.app = null;
    this.headerRef = React.createRef();
    this.firstSectionRef = React.createRef();
    this.postModalBtnRef = React.createRef();
    this.state = {
      headerHeight: 0,
      windowWidth: 0,
      fstSectionIntersected: false,
      toggleMenu: false,
      postModalActive: false,
      bodyWithoutOverflow: false,
      headerWhiteColorBlack: false
    };
    this.appResizeOb = null;
    this.headerResizeOb = null;
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleTogglePostModalActive = this.handleTogglePostModalActive.bind(this);
    this.toggleBodyOverflow = this.toggleBodyOverflow.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handlePageScroll);
    this.app = document.getElementById('app');
    this.appResizeOb = new ResizeObserver((entries) => {
      let width = entries[0].contentRect.width;
      if(width <= 768){
        width = 768;
      } else if(width <= 1920){
        width = 1920;
      } else {
        width = 4000;
      }
      this.setState({ windowWidth: width });
      if(entries[0].contentRect.width >= 992 && this.state.toggleMenu) this.setState({ toggleMenu: false });
    });
    this.appResizeOb.observe(this.app);
    this.headerResizeOb = new ResizeObserver((entries) => {
      const height = entries[0].target.clientHeight;
      if(height !== this.state.headerHeight) this.setState({ headerHeight: height });
    });
    if(this.headerRef.current) this.headerResizeOb.observe(this.headerRef.current);
    if(this.props.location.pathname === '/' || this.props.location.pathname === '/tips' || this.props.location.pathname === '/photoandvideo'){
      this.setState({ headerWhiteColorBlack: false });
    } else {
      this.setState({ headerWhiteColorBlack: true });
    }
  }
  componentDidUpdate(prevProps, prevState){
    const { pathname } = this.props.location;
    const { pathname:lastLocation } = prevProps.location;
    const modalRoot = document.getElementById('modal-root');
    if(pathname !== lastLocation){
      let headerWhiteColorBlack = true;
      if(pathname === '/' || pathname === '/tips' || pathname === '/photoandvideo'){
        headerWhiteColorBlack = false;
      }
      if(this.state.toggleMenu) this.handleToggleMenu();
      this.setState({ 
        headerWhiteColorBlack,
        fstSectionIntersected: false 
      });
    }
    if(this.state.postModalActive){
      modalRoot.classList.add('--active');
      const postModalBtnRef  = this.postModalBtnRef.current;
      if(postModalBtnRef) postModalBtnRef.focus();
    }
    else if(!this.state.postModalActive) modalRoot.classList.remove('--active');
    if(prevState.bodyWithoutOverflow !== this.state.bodyWithoutOverflow) this.toggleBodyOverflow(this.state.bodyWithoutOverflow);
  }
  componentWillUnmount(){ 
    window.removeEventListener('scroll', this.handlePageScroll);
    if(this.headerRef.current) this.headerResizeOb.unobserve(this.headerRef.current); 
    this.appResizeOb.unobserve(this.app);
  }  
  toggleBodyOverflow(status){
    const body = document.querySelector('body');
    if(status) body.classList.add('--no-overflow');
    else body.classList.remove('--no-overflow');
  }
  handlePageScroll(){
    if(this.firstSectionRef.current){
      const fstSectionDistanceFromTop = this.firstSectionRef.current.offsetTop;
      if((window.pageYOffset >= fstSectionDistanceFromTop) && !this.state.fstSectionIntersected) this.setState({ fstSectionIntersected: true });
      else if((window.pageYOffset < fstSectionDistanceFromTop)) this.setState({ fstSectionIntersected: false });
    }
  }
  handleToggleMenu(){
    this.setState((state) => {
      if(!state.toggleMenu) this.toggleBodyOverflow(true);
      else this.toggleBodyOverflow(false);
      return ({ toggleMenu: !state.toggleMenu });
    });
  }
  handleTogglePostModalActive(){
    this.setState((state) => { 
      let modalActive = false;
      let bodyOverflow = false;
      if(!state.postModalActive){
        modalActive = true;
        bodyOverflow = true;
      }
      return ({ 
        bodyWithoutOverflow: bodyOverflow,
        postModalActive: modalActive
      });
    });
  }
  render(){
    return (
      <Routes>
        <Route path='/' element={<Layout 
            firstSectionIntersected={this.state.fstSectionIntersected}
            headerWhiteColorBlack={this.state.headerWhiteColorBlack}
            handleToggleMenu={this.handleToggleMenu}
            toggleMenu={this.state.toggleMenu}
            headerHeight={this.state.headerHeight}
            ref={this.headerRef}
          />}>
          
          <Route index element={<Suspense fallback={<LoadingAnimation />}>
            <Home 
              headerHeight={this.state.headerHeight} 
              windowWidth={this.state.windowWidth}
              ref={this.firstSectionRef}
            />
          </Suspense>} />
          
          <Route path='tips' element={<Suspense fallback={<LoadingAnimation />}>
            <Tips 
              headerHeight={this.state.headerHeight}
              windowWidth={this.state.windowWidth}
              postModalActive={this.state.postModalActive}
              handleTogglePostModal={this.handleTogglePostModalActive}
              ref={{
                firstSectionRef: this.firstSectionRef,
                postModalRef: this.postModalBtnRef
              }}
            />
          </Suspense>} />
          <Route path='photoandvideo' element={<Suspense fallback={<LoadingAnimation />}>
            <PhotoAndVideo
              headerHeight={this.state.headerHeight}
              windowWidth={this.state.windowWidth}
              postModalActive={this.state.postModalActive}
              handleTogglePostModal={this.handleTogglePostModalActive}
              ref={{
                firstSectionRef: this.firstSectionRef,
                postModalRef: this.postModalBtnRef
              }}
            />
          </Suspense>} />
          <Route path='about' element={<Suspense fallback={<LoadingAnimation />}>
            <About 
              headerHeight={this.state.headerHeight}
              windowWidth={this.state.windowWidth}
              postModalActive={this.state.postModalActive}
              handleTogglePostModal={this.handleTogglePostModalActive}
              setHeaderBackgroundAndColor={this.setHeaderBackgroundAndColor}
              ref={{
                firstSectionRef: this.firstSectionRef,
                postModalRef: this.postModalBtnRef
              }}
            />
          </Suspense>} />
          <Route path='*' element={<Suspense fallback={<LoadingAnimation />}>
            <PageNotFound 
              headerHeight={this.state.headerHeight}
            />
          </Suspense>} />
        </Route>
      </Routes>
    );
  }
}
export default appWithUseLocationHOC(App);