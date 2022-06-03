import {UsersActionTypes, UsersReducerAction, UsersReducerState} from "../../types/users-reduser-types";

const initialState: UsersReducerState = {
    users: [],
    page: 1,
    limit: 10,
    pagesArray: [],
    isFetching: false,
    pages: 0,
    total: 0,
}

export const usersReducer = (state = initialState, action: UsersReducerAction): UsersReducerState => {
    switch (action.type) {
        case UsersActionTypes.FOLLOW_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UsersActionTypes.UNFOLLOW_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                pages: action.data.pages,
                total: action.data.total,
                limit: action.data.limit,
                page: action.data.page,
                pagesArray: Array.from(Array(action.data.pages).keys()).map(i => i + 1),
                users: action.data.docs
            };
        case UsersActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.pageNumber
            };
        case UsersActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case UsersActionTypes.SHOW_MORE_USERS:
            return state;
        case UsersActionTypes.FIND_USERS:
            return state;
        case UsersActionTypes.SEND_MESSAGE_TO_USER:
            return state;
        case UsersActionTypes.OPEN_USER_PAGE:
            return state;
        default:
            return state;
    }
};