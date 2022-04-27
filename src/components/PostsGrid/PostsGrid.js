import React from 'react';

import styles from './postsgrid.module.css';
import PostModal from '../PostModal/PostModal';

class PostsGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postIndexModal: 0
    };
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }
  handlePostClick(itemIndex){
    this.setState({ postIndexModal: itemIndex });
    this.props.handleTogglePostModal();
  }
  handleModalClick(typeButton){
    if(typeButton === 'close') this.props.handleTogglePostModal();
    else{
      const postsLenght = this.props.posts.length - 1;
      const { postIndexModal } = this.state;
      let newPostIndex = 0;
      if(typeButton === 'fwd') newPostIndex = (postIndexModal + 1) > postsLenght ? postsLenght : (postIndexModal + 1);
      else newPostIndex = (postIndexModal - 1) >= 0 ? (postIndexModal - 1) : 0;
      this.setState({ postIndexModal: newPostIndex });
    }
  }
  render(){
    const { posts, postModalActive } = this.props;
    let itemIndex = 0;
    return (
      <section className={styles['postsgrid']}>
        {
          posts.map(({ id, src }) => {
            itemIndex += 1;
            return (
              <button 
                key={id}
                className={styles['btn-container']}
                onClick={this.handlePostClick.bind(this, itemIndex - 1)}
              >
                <img 
                  src={src}
                  alt=''
                  className={styles['img']}
                />
              </button>
            )
          })
        }
        {postModalActive && (
          <PostModal 
            post={posts[this.state.postIndexModal].src}
            handleClick={this.handleModalClick}
          />
        )}
        
      </section>
    );
  }
}

export default PostsGrid;