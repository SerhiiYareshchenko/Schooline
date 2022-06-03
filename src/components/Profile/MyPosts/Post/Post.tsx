import React from 'react';
import p from './Post.module.css';
import like from './like.jpg';

const Post = (props: any) => {
  return (
    <div className={p.item}>
      { props.message}
      <div className={p.likes}>
        <img src={like} alt="3"/>
        <nav>{props.likeCount}</nav>
      </div>
    </div>
  )
}
export default Post;