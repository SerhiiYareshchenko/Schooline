import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import fr from './Friends.module.css';

const Friends = (props) => {

  let state = props.friendsPage.friendsProfile;

  let friendsElements = state.map(f => <FriendItem id={f.id} photo={f.photo} name={f.name} age={f.age} meritalStatus={f.meritalStatus} country={f.country} />);

  return (
    <div>
      {/* <nav>Friends online</nav> */}
      <div className={fr.friends} key="{friendsElements.id}" >
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends;