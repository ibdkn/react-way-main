import React from 'react';
import './MyPosts.module.css';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};
