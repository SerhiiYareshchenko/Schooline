import {FriendsActionTypes, FriendsReducerAction, FriendsReducerState} from "../../types/friends-reducer-types";


const initialState: FriendsReducerState = {
    friendsProfile: [{
        id: 1, name: 'Sergey', age: 28, meritalStatus: 'Married', country: 'United States', photo: ''
    }]
};

export const friendsReducer = (state = initialState, action: FriendsReducerAction): FriendsReducerState => {
    switch (action.type) {
        case FriendsActionTypes.SEND_MESSAGE_TO_FRIEND:
/*              let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messagesData.push({id: 7, message: body});*/
            return state;
        case FriendsActionTypes.OPEN_FRIEND_PAGE:
 /*             state.newMessageBody = action.newMessage;*/
            return state;
        default:
            return state;
    }
}