import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const MyPosts: React.FC = (props) => {

    const {postsData, newPostText} = useTypedSelector(state => state.profilePage)
    const {updateNewPostText, addPost} = useActions()

  let newPostElement = React.createRef();

  let postAdd = () => {
      addPost();
  }

    let onPostChange = (e: any) => {
        let text = e.target.value;
        updateNewPostText(text);
    }

  return (
    <div className={p.myPosts}>
      <div className={p.item}>
          <textarea value={newPostText} onChange={onPostChange} placeholder='Enter your post'/>
        <button className={p.button} onClick={postAdd}>Add post</button>
      </div>

      <div className={p.posts}>
        { postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />) }
      </div>
    </div>
  )
}

export default MyPosts; 