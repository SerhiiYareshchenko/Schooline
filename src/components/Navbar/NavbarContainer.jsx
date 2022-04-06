import Navbar from './Navbar'
import { connect } from 'react-redux';
import { openFriendPageCreator, sendMessageToFriendCreator } from '../../redux/friends-reducer';

let mapStateToProps = (state) => {
  
  return {
    friendsPage: state.friendsPage
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
      openFriendPage: () => {
        dispatch(openFriendPageCreator());
      },
      sendMessageToFiend: (action) => {
        dispatch(sendMessageToFriendCreator(action));
      }
    }
  }

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;