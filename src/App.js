import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import './styles/normalize.css';
import './styles/global.css';
import { Home } from './pages';
import { Layout } from './components';

class App extends React.Component{
  constructor(props){
    super(props);
    this.headerRef = React.createRef();
    this.state = {
      headerHeight: 0
    };
    this.headerResizeOb = null;
  }
  componentDidMount(){
    this.headerResizeOb = new ResizeObserver((entries) => {
      const height = entries[0].target.clientHeight;
      if(height !== this.state.headerHeight) this.setState({ headerHeight: height });
    });
    this.headerResizeOb.observe(this.headerRef.current);
  }
  componentWillUnmount(){ this.headerResizeOb.unobserve(this.headerRef.current); }
  render(){
    return (
      <Routes>
        <Route path='/' element={<Layout ref={this.headerRef}/>}>
          <Route index element={<Home headerHeight={this.state.headerHeight} />} />
          <Route path='*' element={<h1>Page not found. </h1>} />
        </Route>
      </Routes>
    );
  }
}

export default App;