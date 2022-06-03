import {SidebarActionTypes, SidebarReducerAction} from "../../types/sidebar-reducer-types";

export function showSidebar (): SidebarReducerAction {
    return {type: SidebarActionTypes.SHOW_SIDEBAR, isHide: false}
}

export function hideSidebar (): SidebarReducerAction {
    return {type: SidebarActionTypes.HIDE_SIDEBAR, isHide: true}
}