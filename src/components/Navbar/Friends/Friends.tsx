import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import fr from './Friends.module.css';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const Friends = () => {

    const {friendsProfile} = useTypedSelector(state => state.friendsPage);
    const {openFriendPage, sendMessageToFriend} = useActions()

  return (
    <div>
      {/* <nav>Friends online</nav> */}
      <div className={fr.friends} key="{friendsElements.id}" >
        {friendsProfile.map(f => <FriendItem id={f.id} photo={f.photo} name={f.name} age={f.age} status={f.status} country={f.country} description={f.description}/>)}
      </div>
    </div>)
}

export default Friends;