import React from 'react';
import './Profile.module.css';
import gate from "../../assets/images/gate.jpeg";
import s from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={gate} alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};
