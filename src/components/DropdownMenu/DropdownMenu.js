import React from 'react';

import styles from './dropdownmenu.module.css';
import MainNavLink from '../MainNavLink/MainNavLink';

class DropdownMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contentExpanded: false
    }
    this.toggleContentStatus = this.toggleContentStatus.bind(this);
  }
  toggleContentStatus(){
    this.setState((state) => ({ contentExpanded: !state.contentExpanded }));
  }
  render(){ 
    return (
      <div className={styles['dropdown']}>
        <button
          type='button'
          aria-controls={`${this.props.buttonLabel}__list`}
          aria-expanded={this.state.contentExpanded}
          className={styles['dropdown__btn']}
          onClick={this.toggleContentStatus}
        >
          {this.props.buttonLabel}
        </button>
        <ul
          id={`${this.props.buttonLabel}__list`}
          className={[`${styles['dropdown__content']}`, `${styles[this.state.contentExpanded ? '--active': '']}`].join(' ')}
        >
          <li><MainNavLink path='/' label='Europe' handleToggleMenu={this.props.handleToggleMenu}/></li>
          <li><MainNavLink path='/' label='America' handleToggleMenu={this.props.handleToggleMenu}/></li>
        </ul>
      </div>
    );
  }
}

export default DropdownMenu;