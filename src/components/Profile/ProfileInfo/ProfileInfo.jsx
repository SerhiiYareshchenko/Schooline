import React from 'react';
import pi from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={pi.profileInfo}>
      <div>
        зображення
      </div>

      <div className={pi.description}>
        avatar+description
      </div>
    </div>
  )
}
export default ProfileInfo;