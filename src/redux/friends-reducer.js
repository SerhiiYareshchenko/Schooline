const SEND_MESSAGE_TO_FRIEND = 'SEND_MESSAGE_TO_FRIEND';
const OPEN_FRIEND_PAGE = 'OPEN_FRIEND_PAGE';

let initialState = {
    friendsProfile: [{
            id: 1,
            name: 'Sergey',
            age: 28,
            meritalStatus: 'Married',
            country: 'United States',
            photo: ''
    ]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_TO_FRIEND:
            console.log(SEND_MESSAGE_TO_FRIEND);
           /*  let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 7, message: body});*/
            return state; 
        case OPEN_FRIEND_PAGE:
            console.log(OPEN_FRIEND_PAGE);
           /*  state.newMessageBody = action.newMessage;*/
            return state;
        default:
            return state;
    }
};

export const sendMessageToFriendCreator = () => ({ type: SEND_MESSAGE_TO_FRIEND });

export const openFriendPageCreator = () => ({ type: OPEN_FRIEND_PAGE });

export default friendsReducer;