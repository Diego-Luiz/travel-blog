import React from 'react';

import styles from './subsectionwitharticles.module.css';
import SubSectionTitle from '../SubSectionTitle/SubSectionTitle';
import SectionContainer from '../SectionContainer/SectionContainer';
import SubSectionArticle from '../SubSectionArticle/SubSectionArticle';
import Pagination from '../Pagination/Pagination';

class SubSectionWithArticles extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articlesToShow: [],
      contentChange: false
    }
    this.articlesContainer = React.createRef();
    this.handleBtnPaginationClick = this.handleBtnPaginationClick.bind(this);
    this.handleAnimationContentEnd = this.handleAnimationContentEnd.bind(this);
  }
  componentDidMount(){
    const { articlesPView } = this.props;
    const articlesLength = this.props.articles.length;
    const lastArticleIndexInitialVisible = articlesLength > articlesPView ? articlesPView : articlesLength;
    this.setState({ articlesToShow: this.props.articles.slice(0, lastArticleIndexInitialVisible) });
  }
  handleAnimationContentEnd(){
    this.setState({ contentChange: false });
  }
  handleBtnPaginationClick(start, end){
    const articlesContainer = this.articlesContainer.current;
    if(articlesContainer){
      window.scrollTo({
        top: articlesContainer.offsetTop,
        behavior: 'smooth'
      });
    }
    this.setState({ 
      articlesToShow: this.props.articles.slice(start, end),
      contentChange: true
    });
  }
  render(){
    return (
      <SectionContainer autoHeight={true}>
        <SubSectionTitle TitleLevel={'h2'}>{this.props.sectionDescription}</SubSectionTitle>
        <div 
          className={
            [styles['articles'],
            `${this.state.contentChange ? styles['--content-changed']: ''}`
            ].join(' ')
          }
          onAnimationEnd={this.handleAnimationContentEnd}
          ref={this.articlesContainer}
        >
          {
            this.state.articlesToShow.map(
              article => (
                <SubSectionArticle 
                  key={article.id}
                  article={article}
                  TitleLevel={'h3'}
                />
              )
            )
          }
        </div>
        <Pagination
          articlesLength={this.props.articles.length}
          articlesPView={this.props.articlesPView}
          handleBtnPaginationClick={this.handleBtnPaginationClick}
        />
      </SectionContainer>
    );
  }
};

export default SubSectionWithArticles;