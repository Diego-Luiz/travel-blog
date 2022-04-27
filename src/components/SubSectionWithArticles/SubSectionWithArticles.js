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
      articlesToShow: []
    }
    this.handleBtnPaginationClick = this.handleBtnPaginationClick.bind(this);
  }
  componentDidMount(){
    const { articlesPView } = this.props;
    const articlesLength = this.props.articles.length;
    const lastArticleIndexInitialVisible = articlesLength > articlesPView ? articlesPView : articlesLength;
    this.setState({ articlesToShow: this.props.articles.slice(0, lastArticleIndexInitialVisible) });
  }
  handleBtnPaginationClick(start, end){
    this.setState({ articlesToShow: this.props.articles.slice(start, end) });
  }
  render(){
    return (
      <SectionContainer autoHeight={true}>
        <SubSectionTitle TitleLevel={'h2'}>Tips for travellers</SubSectionTitle>
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