import {SidebarActionTypes, SidebarReducerAction, SidebarReducerState} from "../../types/sidebar-reducer-types";

const initialState: SidebarReducerState = {
    isHide: true
}

export const sidebarReducer = (state = initialState, action: SidebarReducerAction): SidebarReducerState => {
    switch (action.type) {
        case SidebarActionTypes.SHOW_SIDEBAR:
            return {...state, isHide: action.isHide};
        case SidebarActionTypes.HIDE_SIDEBAR:
            return {...state, isHide: action.isHide};
        default:
            return state;
    }
};