import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {friendsReducer} from "./friends-reducer";
import {usersReducer} from "./users-reducer";
import {userFormReducer} from "./user-form-reducer";

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    userForm: userFormReducer
});

export type RootState = ReturnType<typeof rootReducers>