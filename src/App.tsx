import React from 'react';
import './App.css';
import logo from "./assets/images/logo.png"
import gate from "./assets/images/gate.jpeg"

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src={logo} alt=""/>
            </header>
            <nav className="nav">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
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
        </div>
    );
}


export default App;
