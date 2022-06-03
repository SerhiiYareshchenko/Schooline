import {DialogsActionTypes, DialogsReducerAction, DialogsReducerState} from "../../types/dialogs-reducer-type";

const initialState: DialogsReducerState = {
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

export const dialogsReducer = (state = initialState, action: DialogsReducerAction): DialogsReducerState => {
    switch (action.type) {
        case DialogsActionTypes.UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case DialogsActionTypes.SEND_MESSAGE:
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