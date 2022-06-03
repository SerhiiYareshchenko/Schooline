import {ProfileActionTypes, ProfileReducerAction} from "../../types/profile-reducer-type";
import axios from "axios";
import {Dispatch} from "redux";
import {GetUsersResponse} from "../../models/IUsers/response/GetUsersResponse";


export const setUserProfile = (userId: string) => {
    return async (dispatch: Dispatch<ProfileReducerAction>) => {
        if (userId) {
            dispatch({type: ProfileActionTypes.SET_IS_FETCHING, isFetching: true})
            await axios.get<GetUsersResponse>(`http://localhost:5001/api/profile/${userId}`)
                .then(response => {
                    dispatch({type: ProfileActionTypes.SET_IS_FETCHING, isFetching: false})
                    dispatch({type: ProfileActionTypes.SET_USER_PROFILE, profile: response.data})
                });
        }
    }
}

export function addPost (): ProfileReducerAction {
    return {type: ProfileActionTypes.ADD_POST}
}

export function updateNewPostText (enteredText: string): ProfileReducerAction {
    return {type: ProfileActionTypes.UPDATE_NEW_POST_TEXT, text: enteredText}
}