import React from 'react';

import styles from './postsgrid.module.css';
import PostModal from '../PostModal/PostModal';
import { ModalPosts } from '../../data/postsPhotoVideo';
import PostGrid from '../PostGrid/PostGrid';

class PostsGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postIndexModal: 0
    };
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleKbrdControll = this.handleKbrdControll.bind(this);
  }
  handlePostClick(itemIndex){
    this.setState({ postIndexModal: itemIndex });
    this.props.handleTogglePostModal();
  }
  handleModalClick(typeButton){
    if(typeButton === 'close') this.props.handleTogglePostModal();
    else {
      const postsLenght = this.props.posts.length - 1;
      const { postIndexModal } = this.state;
      let newPostIndex = 0;
      if(typeButton === 'fwd') newPostIndex = (postIndexModal + 1) > postsLenght ? postsLenght : (postIndexModal + 1);
      else newPostIndex = (postIndexModal - 1) >= 0 ? (postIndexModal - 1) : 0;
      this.setState({ postIndexModal: newPostIndex });
    }
  }
  handleKbrdControll({ key }){
    const postsLenght = this.props.posts.length - 1;
    let { postIndexModal } = this.state;
    if(key.includes('Arrow')){
      if(key === 'ArrowDown' || key === 'ArrowLeft'){
        postIndexModal =  postIndexModal - 1 < 0 ? 0 : postIndexModal - 1;
      } else if(key === 'ArrowUp' || key === 'ArrowRight'){
        postIndexModal =  postIndexModal + 1 > postsLenght ? postsLenght : postIndexModal + 1;
      }
      this.setState({ postIndexModal });
    } else if(key === 'Escape'){
      this.props.handleTogglePostModal();
    }
  }
  render(){
    const { posts, postModalActive, innerRef, windowWidth } = this.props;
    let itemIndex = 0;
    return (
      <section 
        className={styles['postsgrid']}
        onKeyDown={this.handleKbrdControll}
      >
        {
          posts.map(({ id, src }) => {
            itemIndex += 1;
            return (
              <PostGrid 
                key={id}
                handleClick={this.handlePostClick.bind(this, itemIndex - 1)}
                imageSrc={src}
              />
            )
          })
        }
        {postModalActive && (
          <PostModal 
            post={ModalPosts.get(this.state.postIndexModal).get(windowWidth)}
            handleClick={this.handleModalClick}
            ref={innerRef}
          />
        )}
        
      </section>
    );
  }
}

export default React.forwardRef((props, ref) => <PostsGrid {...props} innerRef={ref}/>);