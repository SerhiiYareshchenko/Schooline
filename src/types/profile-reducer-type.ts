export enum ProfileActionTypes {
    ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_IS_FETCHING = 'SET_IS_FETCHING'
}

export interface ProfileReducerState {
    postsData: any[],
    newPostText: string,
    profile: any[],
    isFetching: boolean
}

interface AddPost {
    type: ProfileActionTypes.ADD_POST
}
interface UpdateNewPostText {
    type: ProfileActionTypes.UPDATE_NEW_POST_TEXT
    text: string
}
interface SetUserProfile {
    type: ProfileActionTypes.SET_USER_PROFILE
    profile: any
}
interface SetIsFetching {
    type: ProfileActionTypes.SET_IS_FETCHING
    isFetching: boolean
}

export type ProfileReducerAction = AddPost | UpdateNewPostText | SetUserProfile | SetIsFetching