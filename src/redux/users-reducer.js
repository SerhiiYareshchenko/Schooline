const FIND_USERS = 'FIND_USERS';
const SHOW_MORE_USERS = 'SHOW_MORE_USERS';
const SEND_MESSAGE_TO_USER = 'SEND_MESSAGE_TO_FRIEND';
const OPEN_USER_PAGE = 'OPEN_FRIEND_PAGE';
const FOLLOW_TO_FRIEND = 'FOLLOW_TO_FRIEND';
const UNFOLLOW_TO_FRIEND = 'UNFOLLOW_TO_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    page: 1,
    count: 7,
    pages: 0,
    pagesArray: [],
    total: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                pages: action.users.pages,
                total: action.users.total,
                pagesArray: [...Array(Math.ceil(action.users.total/state.count)).keys()].map(i => i+1),
                users: action.users.docs
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SHOW_MORE_USERS:
            return state;
        case FIND_USERS:
            return state;
        case SEND_MESSAGE_TO_USER:
            return state;
        case OPEN_USER_PAGE:
            return state;
        default:
            return state;
    }
};

export const followToFriendCreator = (userId) => ({type: FOLLOW_TO_FRIEND, userId});
export const unfollowToFriendCreator = (userId) => ({type: UNFOLLOW_TO_FRIEND, userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageCreator = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const findUsersCreator = () => ({type: FIND_USERS});
export const showMoreUsersCreator = () => ({type: SHOW_MORE_USERS});
export const sendMessageToUserCreator = () => ({type: SEND_MESSAGE_TO_USER});
export const openUserPageCreator = () => ({type: OPEN_USER_PAGE});

export default usersReducer;