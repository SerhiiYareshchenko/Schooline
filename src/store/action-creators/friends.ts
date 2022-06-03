import {FriendsActionTypes, FriendsReducerAction} from "../../types/friends-reducer-types";

export function openFriendPage (): FriendsReducerAction {
    return {type: FriendsActionTypes.OPEN_FRIEND_PAGE}
}

export function sendMessageToFriend (): FriendsReducerAction {
    return {type: FriendsActionTypes.SEND_MESSAGE_TO_FRIEND}
}