import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';

import styles from './header.module.css';
import { SocialMedia } from '..';

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
      state.toggleMenu ? this.menuActive = '' : this.menuActive = '--active';
      return ({ toggleMenu: !state.toggleMenu });
    });
  }
  render(){
    return (
      <header className={styles[`${this.state.toggleMenu ? '--menu-active' : ''}`]}>
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
            <RiMenuFill />
          </button>
          <ul 
            className={[styles['main-nav__links'], styles[`${this.menuActive}`] ].join(' ')}
            id={styles['main-nav__links']}
          >
            <li>
              <Link to='/' className={styles['link']}>Destinations</Link>
            </li>
            <li>
              <Link to='/' className={styles['link']}>Tips</Link>
            </li>
            <li>
              <Link to='/' className={styles['link']}>Photo and Video</Link>
            </li>
            <li>
              <Link to='/' className={styles['link']}>About us</Link>
            </li>
          </ul>
        </nav>  
      </header>
    );
  }
    
}

export default Header;