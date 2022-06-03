import {IUser} from "../models/IUser/IUser";

export enum UserFormActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_LOADING = 'SET_LOADING',
    GET_STATE_USER_FORM = 'GET_STATE_USER_FORM',
}

export interface UserFormReducerState {
    user: IUser
    isAuth: boolean
    isLoading: boolean
}

interface setAuth {
    type: UserFormActionTypes.SET_AUTH,
    isAuth: boolean
}
interface setUser {
    type: UserFormActionTypes.SET_USER,
    user: IUser
}
interface setLoading {
    type: UserFormActionTypes.SET_LOADING,
    isLoading: boolean
}

interface getStateUserForm {
    type: UserFormActionTypes.GET_STATE_USER_FORM,
}

export type UserFormReducerAction = setAuth | setUser | setLoading | getStateUserForm