import {DialogsActionTypes, DialogsReducerAction} from "../../types/dialogs-reducer-type";

export function updateNewMessageBody (changeBody: string): DialogsReducerAction {
    return {type: DialogsActionTypes.UPDATE_NEW_MESSAGE_BODY, body: changeBody}
}

export function sendMessage (): DialogsReducerAction {
    return {type: DialogsActionTypes.SEND_MESSAGE}
}