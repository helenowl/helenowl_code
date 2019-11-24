import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Message=(props) => {

    return <div className={s.message}>{props.message}</div>
};

const Dialogs=(props) => {

    let dialogs=[
        {id: 1, name: 'Lena'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Yulia'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Anna'}
    ];

    let messages=[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hiiiiii'},
        {id: 4, message: ':))))'}
    ];


    let dialogsElements=
            dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements=
            messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );

};

export default Dialogs;