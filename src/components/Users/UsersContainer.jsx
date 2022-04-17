import Users from "./Users";
import {
    setUsersCreator,
    findUsersCreator,
    followToFriendCreator,
    unfollowToFriendCreator,
    showMoreUsersCreator,
    sendMessageToUserCreator,
    openUserPageCreator,
    setCurrentPageCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        usersPageData: state.usersPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);