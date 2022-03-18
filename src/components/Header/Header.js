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
      toggleMenu: false
    };
    this.menuActive = '';
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(){
    this.setState(state => { 
      state.toggleMenu ? this.menuActive = '--closed' : this.menuActive = '--active';
      return ({ toggleMenu: !state.toggleMenu });
    });
  }
  render(){
    return (
      <header 
        className={styles[`${this.state.toggleMenu ? '--menu-active' : ''}`]}
        ref={this.props.innerRef}
      >
        <h1 className={styles['logo']}>
          <Link to='/'>
            Travellers Club
          </Link>
        </h1> 
        <nav className={[styles['main-nav'], styles[`${this.menuActive}`]].join(' ')}>
          <button 
            className={styles['nav-btn']}
            onClick={this.toggleMenu}
            aria-controls={styles['main-nav__links']}
            aria-expanded={this.state.toggleMenu}
          >
            <span className='sr-only'>Toggle menu</span>
            <MenuHamburguer menuStatus={this.menuActive}/>
          </button>
          <ul 
            className={[styles['main-nav__links'], styles[`${this.menuActive}`] ].join(' ')}
            id={styles['main-nav__links']}
          >
            <li>
              <DropdownMenu buttonLabel='Destinations'/>
            </li>
            <li>
              <MainNavLink path='/' label='Tips'/>
            </li>
            <li>
              <MainNavLink path='/' label='Photos and Video'/>
            </li>
            <li>
              <MainNavLink path='/' label='About us'/>
            </li>
          </ul>
        </nav>  
      </header>
    );
  }
}

export default React.forwardRef((props, ref) => <Header {...props} innerRef={ref} /> );