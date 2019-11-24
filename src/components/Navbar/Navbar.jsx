import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) =>{
    return (
        <div>

        </div>


    )
}
const Navbar=(props) => {
    return (
        <div className={s.nav}>
        <nav>
            <div className={s.item}>
                <NavLink to ="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
        <div>
            <Friends navbar ={props.navbar}/>
        </div>
        </div>
    )
};

export default Navbar;