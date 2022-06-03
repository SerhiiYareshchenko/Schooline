export enum DialogsActionTypes {
SEND_MESSAGE = 'SEND_MESSAGE',
UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
}

export interface DialogsReducerState {
    dialogsData: any[]
    messagesData: any[]
    newMessageBody: string
}

interface SendMessage {
    type: DialogsActionTypes.SEND_MESSAGE
}

interface UpdateNewMessageBody {
    type: DialogsActionTypes.UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type DialogsReducerAction = SendMessage | UpdateNewMessageBody