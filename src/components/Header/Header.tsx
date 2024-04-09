import React from 'react';
import './Header.module.css';
import logo from "../../assets/images/logo.png";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>
        </header>
    );
};
