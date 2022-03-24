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
    this.headerRef = React.createRef();
    this.firstSectionRef = React.createRef();
    this.state = {
      headerHeight: 0,
      firstSectionIntersected: false,
      toggleMenu: false
    };
    this.headerResizeOb = null;
    this.firstSectionIntersOb = null;
    this.firstSectionObShouldBeInitialized = true;
    this.firstIntersObOptions = {
      threshold: 0.2
    };
    this.handleFirstSectionIntersection = this.handleFirstSectionIntersection.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleFirstIntersObAssignment = this.handleFirstIntersObAssignment.bind(this);
  }
  componentDidMount(){
    this.headerResizeOb = new ResizeObserver((entries) => {
      const height = entries[0].target.clientHeight;
      if(height !== this.state.headerHeight) this.setState({ headerHeight: height });
    });
    this.firstSectionIntersOb = new IntersectionObserver(this.handleFirstSectionIntersection, this.firstIntersObOptions);
    if(this.headerRef.current) this.headerResizeOb.observe(this.headerRef.current);
    this.handleFirstIntersObAssignment();
  }
  componentDidUpdate(){
    this.handleFirstIntersObAssignment();
  }
  componentWillUnmount(){ 
    if(this.headerRef.current) this.headerResizeOb.unobserve(this.headerRef.current); 
    if(this.firstSectionRef.current) this.firstSectionIntersOb.unobserve(this.firstSectionRef.current);
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
    if(entry.isIntersecting){
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
            ref={this.firstSectionRef}
          />} />
          <Route path='*' element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    );
  }
}
export default appWithUseLocationHOC(App);