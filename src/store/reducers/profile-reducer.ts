import {ProfileActionTypes, ProfileReducerAction, ProfileReducerState,} from "../../types/profile-reducer-type";
import {UsersActionTypes} from "../../types/users-reduser-types";

const initialState: ProfileReducerState = {
    postsData: [{
        id: 1,
        message: 'Hi, friends',
        likeCount: 11
    },
    {
        id: 2,
        message: 'My best post',
        likeCount: 14
    },
    {
        id: 3,
        message: 'Way of Samurai',
        likeCount: 7
    },
    {
        id: 4,
        message: 'React Native',
        likeCount: 2
    },
    {
        id: 5,
        message: 'JS it\'s cool',
        likeCount: 23
    },
    {
        id: 6,
        message: 'Realy?',
        likeCount: 17
    }
    ],
    newPostText: '',
    profile: [],
    isFetching: false
}

export const profileReducer = (state = initialState, action: ProfileReducerAction): ProfileReducerState => {
    switch (action.type) {
        case ProfileActionTypes.ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        }
        case ProfileActionTypes.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case ProfileActionTypes.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case ProfileActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}