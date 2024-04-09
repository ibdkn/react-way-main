import React from 'react';
import './Post.module.css';
import s from "./Post.module.css"

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            {props.message}
            <div>like</div>
        </div>
    );
};
