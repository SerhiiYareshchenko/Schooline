import * as UsersActionCreators from './users'
import * as DialogsActionCreators from './dialogs'
import * as FriendsActionCreators from './friends'
import * as ProfileActionCreators from './profile'
import * as SidebarActionCreators from './sidebar'
import * as UserFormActionCreators from './user-form'

export default {
    ...UsersActionCreators,
    ...ProfileActionCreators,
    ...DialogsActionCreators,
    ...SidebarActionCreators,
    ...UserFormActionCreators,
    ...FriendsActionCreators
}