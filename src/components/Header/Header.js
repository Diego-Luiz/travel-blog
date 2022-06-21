import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';
import MainNavLink from '../MainNavLink/MainNavLink';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      prevScrollPosition: window.pageYOffset,
      hidden: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate(){
    if(this.props.toggleMenu && this.state.hidden) this.setState({ hidden: false });
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    const { prevScrollPosition } = this.state;
    const currentScrollPosition = window.pageYOffset;
    const shouldBeVisible = currentScrollPosition < prevScrollPosition;
    this.setState({
      prevScrollPosition: currentScrollPosition,
      hidden: !shouldBeVisible
    });
  }
  render(){
    return (
      <header 
        className={
          [ styles[`${this.props.toggleMenu ? '--menu-active' : ''}`], 
            styles[`${this.state.hidden ? '--hidden': ''}`], 
            styles[`${this.props.firstSectionIntersected ? '--fstSectionIntersected': ''}`],
            styles[`${this.props.headerWhiteColorBlack ? '--headerWhiteColorBlack' : ''}`]
          ].join(' ')
        }
        ref={this.props.innerRef}
      >
        <h1 className={styles['logo']}>
          <Link to='/'>
            Travellers Club
          </Link>
        </h1> 
        <nav className={[styles['main-nav'], styles[`${this.props.toggleMenu ? '--active': ''}`]].join(' ')}>
          <button 
            className={styles['nav-btn']}
            onClick={this.props.handleToggleMenu}
            aria-controls={styles['main-nav__links']}
            aria-expanded={this.props.toggleMenu}
          >
            <span className='sr-only'>Toggle menu</span>
            <MenuHamburguer 
              menuStatus={this.props.toggleMenu ? '--active': '--closed'} 
              firstSectionIntersected={this.props.firstSectionIntersected}
              headerWhiteColorBlack={this.props.headerWhiteColorBlack}
            />
          </button>
          <ul 
            className={
              [ styles['main-nav__links'], 
                styles[`${this.props.toggleMenu ? '--active': ''}`]
              ].join(' ')
            }
            id={styles['main-nav__links']}
            style={
              this.props.toggleMenu ? {height: `calc(100vh - ${this.props.headerHeight}px)`} : null
            }
          >
            <li>
              <DropdownMenu 
                buttonLabel='Destinations' 
                headerHidden={this.state.hidden}
              />
            </li>
            <li>
              <MainNavLink path='/tips' label='Tips' />
            </li>
            <li>
              <MainNavLink path='/photoandvideo' label='Photos and Video' />
            </li>
            <li>
              <MainNavLink path='/about' label='About us' />
            </li>
          </ul>
        </nav>  
      </header>
    );
  }
}

export default React.forwardRef((props, ref) => <Header {...props} innerRef={ref} /> );