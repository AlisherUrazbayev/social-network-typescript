import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsPropsType ={
    messages: MessagesType[]
    userInfo: UserInfoType[]
}

type UserInfoType = {
    id: number
    name: string
}

type MessagesType = {
    text: string
}

type DialogItemPropsType = {
    _id: number
    name: string
}

const DialogItem = ({_id, name}: DialogItemPropsType) => {
    return (
        <div>
            <NavLink to={`./${_id}`}>{name}</NavLink>
        </div>
    )
}

type MessagePropsType = { text: string }

const Message = ({text}: MessagePropsType) => {
    return <div>{text}</div>
}


function Dialogs(props: DialogsPropsType) {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                {props.userInfo.map((user) => {
                    return <DialogItem _id={user.id} name={user.name}/>
                })}
            </div>
            <div className={styles.messages}>
                {props.messages.map(message => <Message text={message.text}/>)}
            </div>
        </div>
    );
}

export default Dialogs;