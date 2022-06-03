import axios from 'axios';
import {Dispatch} from "redux";
import {IUser} from "../../models/IUser/IUser";
import AuthService from "../../services/AuthService";
import {AuthResponse} from "../../models/IUser/response/AuthResponse";
import {API_URL_USER_FORM} from "../../api/userFormInterceptor"
import {UserFormActionTypes, UserFormReducerAction} from "../../types/user-form-reducer-type";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserFormReducerAction>) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            dispatch({type: UserFormActionTypes.SET_AUTH, isAuth: true})
            dispatch({type: UserFormActionTypes.SET_USER, user: response.data.user})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}

export const registration = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserFormReducerAction>) => {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            dispatch({type: UserFormActionTypes.SET_AUTH, isAuth: true})
            dispatch({type: UserFormActionTypes.SET_USER, user: response.data.user})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<UserFormReducerAction>) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            dispatch({type: UserFormActionTypes.SET_AUTH, isAuth: false})
            dispatch({type: UserFormActionTypes.SET_USER, user: {} as IUser})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<UserFormReducerAction>) => {
        dispatch({type: UserFormActionTypes.SET_LOADING, isLoading: true})
        try {
            const response = await axios.get<AuthResponse>(`${API_URL_USER_FORM}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            dispatch({type: UserFormActionTypes.SET_AUTH, isAuth: true})
            dispatch({type: UserFormActionTypes.SET_USER, user: response.data.user})
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            dispatch({type: UserFormActionTypes.SET_LOADING, isLoading: false})
        }
    }
}

export function getStateUserForm (): UserFormReducerAction {
    return {type: UserFormActionTypes.GET_STATE_USER_FORM}
}