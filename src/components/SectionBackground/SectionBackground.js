import React from 'react';


import styles from './sectionbackground.module.css';

class SectionBackground extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      styleBackgroundImage: {}
    };
  }
  componentDidMount(){
    const { windowWidth, backgrounds } = this.props;
    let backgroundSrc = '';
    if(!backgrounds.has(windowWidth)) backgroundSrc = backgrounds.get(4000);
    else backgroundSrc = backgrounds.get(windowWidth);
    this.setState({ styleBackgroundImage: { backgroundImage: `url(${backgroundSrc})`} });
  }
  render(){
    return (
      <div 
        className={styles['section-background']}
        style={this.state.styleBackgroundImage}
      ></div>
    );
  }
}

export default SectionBackground;