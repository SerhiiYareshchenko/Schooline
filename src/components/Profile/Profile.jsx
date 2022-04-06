import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import '../../App.css';

const Profile = () => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;