import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts=() => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message = 'Как ты ?' kl = '15'/>
                <Post message = 'Хорошо выглядишь' kl = '20'/>
            </div>
        </div>

    )
};

export default MyPosts;