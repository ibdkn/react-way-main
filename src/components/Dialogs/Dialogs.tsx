import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: any) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Viktor" id="4"/>
                <DialogItem name="Valery" id="5"/>
                <DialogItem name="Andrey" id="6"/>
            </div>
            <div className={s.messagesItems}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="How is your it-kamasutra?"/>
            </div>
        </div>
    );
};
