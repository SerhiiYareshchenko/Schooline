const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogsData: [{
            id: 1,
            name: 'Anton'
        },
        {
            id: 2,
            name: 'Alex'
        },
        {
            id: 3,
            name: 'Artur'
        },
        {
            id: 4,
            name: 'Artem'
        },
        {
            id: 5,
            name: 'Andrew'
        },
        {
            id: 6,
            name: 'Dimych'
        }
    ],
    messagesData: [{
            id: 1,
            message: 'It\'s a beautiful day'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Where is you live?'
        },
        {
            id: 4,
            message: 'Great, i like'
        },
        {
            id: 5,
            message: 'Where is my car?'
        },
        {
            id: 6,
            message: 'React kabzda kak prosto'
        }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
 
export default dialogsReducer;