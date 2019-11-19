import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile= () =>{
    return <div className ={s.content}>
        <div>
            <img src='https://static.toiimg.com/thumb/width-800,height-600,msid-60387019.cms'/>
        </div>
        <div>
            <img className={s.img} src='https://3.bp.blogspot.com/-MztBuuzaY5E/WekAVWCtc9I/AAAAAAAAAls/y2CaHt0zfYQvCBa2Cuhs_CMuvexK-jDtACLcBGAs/s1600/Gatekeepers%2B078%2BBlue%2BRose.jpg'/>
        </div>
        <MyPosts/>
    </div>
};

export default Profile;