import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />);

  let newPostElemet = React.createRef();

  let addPost = () => {
    props.onPostAdd();
  }
 
  let onPostChange = () => {
    let text = newPostElemet.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={p.myPosts}>
      <div className={p.item}>
        <textarea onChange={onPostChange} ref={newPostElemet} value={props.newPostText} placeholder='Enter your post'/>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={p.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts; 