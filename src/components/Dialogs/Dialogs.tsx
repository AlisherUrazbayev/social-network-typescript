import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    _id: string
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


function Dialogs() {
    return (
        <div className={styles.container}>

            <div className={styles.dialogs}>
                <DialogItem _id={'1'} name={'Person-1'}/>
                <DialogItem _id={'2'} name={'Person-2'}/>
                <DialogItem _id={'3'} name={'Person-3'}/>
                <DialogItem _id={'4'} name={'Person-4'}/>
            </div>
            <div className={styles.messages}>
                <Message text={'Message-1'}/>
                <Message text={'Message-2'}/>
                <Message text={'Message-3'}/>
                <Message text={'Message-4'}/>
            </div>
        </div>
    );
}

export default Dialogs;