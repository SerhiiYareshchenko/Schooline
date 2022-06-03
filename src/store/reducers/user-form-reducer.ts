import {UserFormActionTypes, UserFormReducerAction, UserFormReducerState} from "../../types/user-form-reducer-type";
import {IUser} from "../../models/IUser/IUser";

const initialState: UserFormReducerState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false
}

export const userFormReducer = (state = initialState, action: UserFormReducerAction): UserFormReducerState => {
    switch (action.type) {
        case UserFormActionTypes.SET_AUTH:
            return {...state, isAuth: action.isAuth};
        case UserFormActionTypes.SET_USER:
            return {...state, user: action.user};
        case UserFormActionTypes.SET_LOADING:
            return {...state, isLoading: action.isLoading};
        case UserFormActionTypes.GET_STATE_USER_FORM:
            return {...state};
        default:
            return state;
    }
};