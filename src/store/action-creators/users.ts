import axios from "axios";
import {Dispatch} from "redux";
import {UsersActionTypes, UsersReducerAction} from "../../types/users-reduser-types";
import {GetUsersResponse} from "../../models/IUsers/response/GetUsersResponse";

export const getUsers = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<UsersReducerAction>) => {
        dispatch({type: UsersActionTypes.SET_IS_FETCHING, isFetching: true})
        await axios.get<GetUsersResponse>(`http://localhost:5001/api/users?page=${page}&count=${limit}`)
            .then(response => {
                dispatch({type: UsersActionTypes.SET_IS_FETCHING, isFetching: false})
                dispatch({type: UsersActionTypes.SET_USERS, data: response.data})
            })
    }
}

export function setCurrentPage (selectedPage: number): UsersReducerAction {
    return {type: UsersActionTypes.SET_CURRENT_PAGE, pageNumber: selectedPage}
    }