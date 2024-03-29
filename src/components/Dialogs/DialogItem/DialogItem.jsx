import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem=(props) => {
    let path="/dialogs/" + props.id;
    return <div className={s.dialog}>
        <img src={props.avatar} className={s.img} align="middle"/>
        <NavLink to={path} activeClassName={s.activeLink}>{props.name} </NavLink>
    </div>
};


export default DialogItem;