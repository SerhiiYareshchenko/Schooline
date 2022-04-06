import Users from "./Users";
import {setUsersCreator, findUsersCreator, followToFriendCreator, unfollowToFriendCreator, showMoreUsersCreator, sendMessageToUserCreator, openUserPageCreator} from "../../redux/users-reducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followToFriend: (userId) => {
            dispatch(followToFriendCreator(userId));
        },
        unfollowToFriend: (userId) => {
            dispatch(unfollowToFriendCreator(userId));
        }, 
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },
        findUsers: () => {
            dispatch(findUsersCreator());
        },
        showMoreUsers: () => {
            dispatch(showMoreUsersCreator());
        },
        sendMessageToUser: () => {
            dispatch(sendMessageToUserCreator());
        },
        openUserPage: () => {
            dispatch(openUserPageCreator());
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;