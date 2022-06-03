export enum SidebarActionTypes {
    HIDE_SIDEBAR = 'HIDE_SIDEBAR',
    SHOW_SIDEBAR = 'SHOW_SIDEBAR'
}

export interface SidebarReducerState {
   isHide: boolean
}

interface hideSidebar {
    type: SidebarActionTypes.HIDE_SIDEBAR
    isHide: boolean
}
interface showSidebar {
    type: SidebarActionTypes.SHOW_SIDEBAR
    isHide: boolean
}

export type SidebarReducerAction = hideSidebar | showSidebar