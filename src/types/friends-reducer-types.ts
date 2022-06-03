export enum FriendsActionTypes {
SEND_MESSAGE_TO_FRIEND = 'SEND_MESSAGE_TO_FRIEND',
OPEN_FRIEND_PAGE = 'OPEN_FRIEND_PAGE'
}

export interface FriendsReducerState {
    friendsProfile: any[]
}

interface SendMessageToFriend {
    type: FriendsActionTypes.SEND_MESSAGE_TO_FRIEND
}
interface OpenFriendPage {
    type: FriendsActionTypes.OPEN_FRIEND_PAGE
}

export type FriendsReducerAction = SendMessageToFriend | OpenFriendPage