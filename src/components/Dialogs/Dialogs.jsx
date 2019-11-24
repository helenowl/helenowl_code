import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs=(props) => {


    let dialogsElements=
            props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements=
            props.state.messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                {messagesElements}
                </div>
                <div>
                    <div className={s.send}>
                        <textarea cols={70} rows={3}></textarea>
                    </div>
                    <div>
                        <button>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default Dialogs;