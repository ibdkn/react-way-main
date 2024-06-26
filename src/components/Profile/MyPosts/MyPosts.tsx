import React from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?"/>
                <Post message="It's my friends!"/>
            </div>
        </div>
    );
};
