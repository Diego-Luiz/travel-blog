import React from 'react';

import styles from './pagination.module.css';
import BtnPagination from '../BtnPagination/BtnPagination';

class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonsPaginationVisible: [],
      actualPage: 0
    }
    this.buttonsPagination = [];
    this.btnPaginationQuantity = Math.ceil(this.props.articlesLength / this.props.articlesPView);
    this.maxBtnPaginationVisible = 2;
    this.willChangeBtnsPaginationVisible = this.btnPaginationQuantity > this.maxBtnPaginationVisible ? true : false;
    this.handleBtnPaginationClick = this.handleBtnPaginationClick.bind(this);
    this.createBtnsPagination = this.createBtnsPagination.bind(this);
    this.dfnFirstLastIndexOfBtnVisible = this.dfnFirstLastIndexOfBtnVisible.bind(this);
    this.handleBtnsBackFwdClick = this.handleBtnsBackFwdClick.bind(this);
  }  
  
  createBtnsPagination(){
    const { articlesLength, articlesPView } = this.props;
    let start = 0, btnIndex = 1, btnPagVisibleIndex = 0;
    let end = articlesLength > articlesPView ? articlesPView : articlesLength;
    while(start !== articlesLength){
      this.buttonsPagination.push(
        <BtnPagination 
          handleClick={this.handleBtnPaginationClick.bind(this, btnIndex, btnPagVisibleIndex, start, end)}
          btnIndex={btnIndex}
          btnPagVisibleIndex={btnPagVisibleIndex}
        />
      );
      if(btnPagVisibleIndex === 1) btnPagVisibleIndex = 0;
      else btnPagVisibleIndex += 1;
      start = end;
      end = (end + articlesPView) > articlesLength ? articlesLength : (end + articlesPView);
      btnIndex += 1;
    }
    let lastBtnPaginationIndex = this.buttonsPagination.length > this.maxBtnPaginationVisible ? this.maxBtnPaginationVisible : this.buttonsPagination.length;
    let buttonsVisible = this.buttonsPagination.slice(0, lastBtnPaginationIndex);
    buttonsVisible[0] = {...buttonsVisible[0]};
    buttonsVisible[0].props = { ...buttonsVisible[0].props, active: true };
    this.setState({
      buttonsPaginationVisible: buttonsVisible
    });
  }
  dfnFirstLastIndexOfBtnVisible(btnIndex, btnPagVisibleIndex){
    let neighborsLeftQuantity = Math.floor(this.maxBtnPaginationVisible / 2);
    let neighborsRightQuantity = Math.floor(this.maxBtnPaginationVisible / 2);
    let indexLeft = 0, indexRight = 0, exceedAux = 0;
    let btnPagLastIndex = this.buttonsPagination.length - 1;
    let btnPagVisibleLastIndex = this.state.buttonsPaginationVisible.length - 1;
    //this gets the actual 'btnPagVisibleIndex' from the last element inside buttonsPaginationVisible. Only used when maxBtnVisible === 2;
    const currentlyFinalBtnIndexInPagVisible = this.state.buttonsPaginationVisible[btnPagVisibleLastIndex].props.btnPagVisibleIndex;
    const realBtnIndex = btnIndex - 1;
    if(this.maxBtnPaginationVisible === 2){
      if((btnPagVisibleIndex && currentlyFinalBtnIndexInPagVisible) || (btnPagVisibleIndex === 0 && currentlyFinalBtnIndexInPagVisible === 0)) neighborsLeftQuantity -= 1;
      else neighborsRightQuantity -= 1;
    }
    else if(this.maxBtnPaginationVisible % 2 === 0) neighborsRightQuantity -= 1;
    indexLeft = realBtnIndex - neighborsLeftQuantity < 0 ? 0 : realBtnIndex - neighborsLeftQuantity; 
    exceedAux = realBtnIndex - neighborsLeftQuantity;
    if(exceedAux < 0){
      indexRight = realBtnIndex + neighborsRightQuantity + Math.abs(exceedAux) + 1;
    } else {
      indexRight = realBtnIndex + neighborsRightQuantity > btnPagLastIndex ? btnPagLastIndex + 1 : realBtnIndex + neighborsRightQuantity + 1; 
      exceedAux = realBtnIndex + neighborsRightQuantity;
      if(exceedAux > btnPagLastIndex) indexLeft = indexLeft - (exceedAux - btnPagLastIndex);
    }
    return {
      indexLeft, 
      indexRight
    };
  }
  handleBtnPaginationClick(btnIndex, btnPagVisibleIndex, start, end){
    this.props.handleBtnPaginationClick(start, end);
    const { indexLeft, indexRight } = this.dfnFirstLastIndexOfBtnVisible(btnIndex, btnPagVisibleIndex);
    let buttonsVisible = this.buttonsPagination.slice(indexLeft, indexRight);
    buttonsVisible = buttonsVisible.map(button => {
      let btnToReturn = {...button};
      if(button.props.btnIndex === btnIndex) btnToReturn.props = { ...btnToReturn.props, active:true };
      return btnToReturn;
    })
    this.setState({ 
      buttonsPaginationVisible: buttonsVisible,
      actualPage: btnIndex - 1
    });
    
  }
  handleBtnsBackFwdClick(evt){
    const { actualPage } = this.state;
    const backOrFwd = evt.target.getAttribute('data-move');
    if(backOrFwd === 'back' && (actualPage - 1) >= 0){
      this.buttonsPagination[actualPage - 1].props.handleClick();
    } else if((backOrFwd === 'forward') && ((actualPage + 1) <= this.buttonsPagination.length - 1)){
      this.buttonsPagination[actualPage + 1].props.handleClick();
    } 
  }
  componentDidMount(){
    this.createBtnsPagination();
  }
  render(){
    return (
      <div className={styles['pagination']}>
        <button 
          type='button'
          className={styles['btn-back']}
          onClick={this.handleBtnsBackFwdClick}
          data-move='back'
        >
          <span className='sr-only'>Back to previous articles</span>
        </button>
        <ul className={styles['pages-list']}>
          {this.state.buttonsPaginationVisible.map(button => (
            <li 
              key={button.props.btnIndex}
              className={styles['pages-list__item']}
            >
              {button}
            </li>
          ))}
        </ul>
        <button 
          type='button'
          className={styles['btn-fwd']}
          onClick={this.handleBtnsBackFwdClick}
          data-move='forward'
        >
          <span className='sr-only'>Go forward to next articles</span>
        </button>
      </div>
    );
  }
}

export default Pagination;