import React from 'react';
import gate from "../assets/images/gate.jpeg";

export const Profile = () => {
    return (
        <div className="content">
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
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};
