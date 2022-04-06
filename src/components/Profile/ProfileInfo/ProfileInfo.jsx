import React from 'react';
import pi from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={pi.profileInfo}>
      <div>
        <img src='123.jpg' alt="4"/>
      </div>

      <div className={pi.description}>
        avatar+description
      </div>
    </div>
  )
}
export default ProfileInfo;