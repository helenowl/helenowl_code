import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile=() => {
    return <div>
        <ProfileInfo/>
        <div>
            <img className={s.fon}
                 src='http://arte1.ru/images/detailed/2/12449.jpg'/>
        </div>
        <div>
            <img className={s.img}
                 src='https://99px.ru/sstorage/56/2017/09/image_562009170714251960368.jpg'/>
        </div>
        <MyPosts/>
    </div>
};

export default Profile;