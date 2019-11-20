import React from 'react';
import s from './Post.module.css';

const Post=(props) => {

    console.log(props.message);
    console.log(props.kl);

    return (
        <div className={s.item}>
            <img
                src='https://png.pngtree.com/png-clipart/20190906/ourlarge/pngtree-creative-hand-drawn-lines-black-curly-woman-side-face-png-image_1718237.jpg'/>
            { props.message }
            <div>
                { props.kl }
                <span> like</span>
            </div>
        </div>
    )
};

export default Post;