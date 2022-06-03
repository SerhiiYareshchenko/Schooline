export enum UsersActionTypes {
    FIND_USERS = 'FIND_USERS',
    SHOW_MORE_USERS = 'SHOW_MORE_USERS',
    SEND_MESSAGE_TO_USER = 'SEND_MESSAGE_TO_FRIEND',
    OPEN_USER_PAGE = 'OPEN_FRIEND_PAGE',
    FOLLOW_TO_FRIEND = 'FOLLOW_TO_FRIEND',
    UNFOLLOW_TO_FRIEND = 'UNFOLLOW_TO_FRIEND',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_IS_FETCHING = 'SET_IS_FETCHING'
}

export interface UsersReducerState {
    users: any[]
    page: number
    limit: number
    pagesArray: number[]
    total: number
    pages: number
    isFetching: boolean
}

interface FindUsers {
    type: UsersActionTypes.FIND_USERS
    userId: string
}

interface ShowMoreUsers {
    type: UsersActionTypes.SHOW_MORE_USERS
}

interface SendMessageToUser {
    type: UsersActionTypes.SEND_MESSAGE_TO_USER
    userId: string
}

interface OpenUserPage {
    type: UsersActionTypes.OPEN_USER_PAGE
    userId: string
}

interface FollowToFriend {
    type: UsersActionTypes.FOLLOW_TO_FRIEND
    userId: string
}

interface UnfollowToFriend {
    type: UsersActionTypes.UNFOLLOW_TO_FRIEND
    userId: string
}

interface SetUsers {
    type: UsersActionTypes.SET_USERS
    data: {
        docs: any[]
        page: number
        pages: number
        total: number
        limit: number
    }
}

interface SetCurrentPage {
    type: UsersActionTypes.SET_CURRENT_PAGE
    pageNumber: number
}

interface SetIsFetching {
    type: UsersActionTypes.SET_IS_FETCHING
    isFetching: boolean
}

export type UsersReducerAction =
    FindUsers
    | ShowMoreUsers
    | SendMessageToUser
    | OpenUserPage
    | FollowToFriend
    | UnfollowToFriend
    | SetUsers
    | SetCurrentPage
    | SetIsFetching