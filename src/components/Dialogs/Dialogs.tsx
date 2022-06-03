import React from 'react';
import s from './Dialogs.module.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {NavLink} from 'react-router-dom';

const Dialogs: React.FC = () => {

    const {messagesData, dialogsData, newMessageBody} = useTypedSelector(state => state.dialogsPage)
    const {sendMessage, updateNewMessageBody} = useActions()

    let onSendMessageClick = () => {
        sendMessage();
    }

    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>

            {dialogsData.map(d =>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"/dialogs/" + d.id}>{d.name}</NavLink>
                </div>)}

            {messagesData.map(m => <div className={s.dialog}>{m.message}</div>)}

            <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'/>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;