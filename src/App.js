import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import './styles/normalize.css';
import './styles/global.css';
import { 
  Home, 
  Tips 
} from './pages';
import { Layout } from './components';
import appWithUseLocationHOC from './hocs/appWithUseLocationHOC';

class App extends React.Component{
  constructor(props){
    super(props);
    this.app = null;
    this.lastLocation = this.props.location.pathname;
    this.headerRef = React.createRef();
    this.firstSectionRef = React.createRef();
    this.state = {
      headerHeight: 0,
      firstSectionIntersected: false,
      toggleMenu: false,
      postModalActive: false
    };
    this.appResizeOb = null;
    this.headerResizeOb = null;
    this.firstSectionIntersOb = null;
    this.firstSectionObShouldBeInitialized = true;
    this.firstIntersObOptions = {
      threshold: 0.2
    };
    this.handleFirstSectionIntersection = this.handleFirstSectionIntersection.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleFirstIntersObAssignment = this.handleFirstIntersObAssignment.bind(this);
    this.handleTogglePostModalActive = this.handleTogglePostModalActive.bind(this);
  }
  componentDidMount(){
    this.app = document.getElementById('app');
    this.appResizeOb = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if(width >= 992 && this.state.toggleMenu) this.setState({ toggleMenu: false });
    });
    this.appResizeOb.observe(this.app);
    this.headerResizeOb = new ResizeObserver((entries) => {
      const height = entries[0].target.clientHeight;
      if(height !== this.state.headerHeight) this.setState({ headerHeight: height });
    });
    if(this.headerRef.current) this.headerResizeOb.observe(this.headerRef.current);
    this.firstSectionIntersOb = new IntersectionObserver(this.handleFirstSectionIntersection, this.firstIntersObOptions);
    this.handleFirstIntersObAssignment();
  }
  componentDidUpdate(){
    const { pathname } = this.props.location;
    const body = document.querySelector('body');
    const modalRoot = document.getElementById('modal-root');
    if(pathname !== this.lastLocation){
      this.lastLocation = pathname;
      if(this.state.toggleMenu) this.handleToggleMenu();
    }
    this.handleFirstIntersObAssignment();
    if(this.state.postModalActive){ 
      body.classList.add('--no-overflow');
      modalRoot.classList.add('--active');
    }
    else if(!this.state.postModalActive){
      body.classList.remove('--no-overflow');
      modalRoot.classList.remove('--active');
    }
  }
  componentWillUnmount(){ 
    if(this.headerRef.current) this.headerResizeOb.unobserve(this.headerRef.current); 
    if(this.firstSectionRef.current) this.firstSectionIntersOb.unobserve(this.firstSectionRef.current);
    this.appResizeOb.unobserve(this.app);
  }
  
  handleFirstIntersObAssignment(){
    if(this.firstSectionRef.current && this.firstSectionObShouldBeInitialized){
      this.firstSectionIntersOb.observe(this.firstSectionRef.current);
      this.firstSectionObShouldBeInitialized = false;
    }
    else if(this.firstSectionRef.current === null){
      this.firstSectionIntersOb.disconnect();
      if(this.state.firstSectionIntersected) this.setState({ firstSectionIntersected: false });
      this.firstSectionObShouldBeInitialized = true;
    }
  }
  handleFirstSectionIntersection([entry]){
    console.log('entry: ', entry);
    if(entry.isIntersecting || (!entry.isIntersecting && entry.boundingClientRect.top < 0)){
      this.setState({ firstSectionIntersected: true });
    } else if(!entry.isIntersecting && entry.boundingClientRect.top >= 0){
      this.setState({ firstSectionIntersected: false });
    }
  }
  handleToggleMenu(){
    this.setState((state) => {
      const body = document.querySelector('body');
      if(!state.toggleMenu){
        body.classList.add('--no-overflow');
      } else {  
        body.classList.remove('--no-overflow');
      } 
      return ({ toggleMenu: !state.toggleMenu })
    });
  }
  handleTogglePostModalActive(){
    this.setState((state) => ({ postModalActive: !state.postModalActive }));
  }
  render(){
    return (
      <Routes>
        <Route path='/' element={<Layout 
            firstSectionIntersected={this.state.firstSectionIntersected}
            handleToggleMenu={this.handleToggleMenu}
            toggleMenu={this.state.toggleMenu}
            headerHeight={this.state.headerHeight}
            ref={this.headerRef}
          />}>
          <Route index element={<Home 
            headerHeight={this.state.headerHeight} 
            ref={this.firstSectionRef}
          />} />
          <Route path='tips' element={<Tips 
            headerHeight={this.state.headerHeight}
            postModalActive={this.state.postModalActive}
            handleTogglePostModal={this.handleTogglePostModalActive}
            ref={this.firstSectionRef}
          />} />
          <Route path='*' element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    );
  }
}
export default appWithUseLocationHOC(App);