import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


function Dialogs() {
    return (
            <div className={styles.container}>

                <div className={styles.dialogs}>
                    <div><NavLink to={"./person-1"}>Person-1</NavLink></div>
                    <div><NavLink to={"./person-2"}>Person-2</NavLink></div>
                    <div><NavLink to={"./person-3"}>Person-3</NavLink></div>
                    <div><NavLink to={"./person-4"}>Person-4</NavLink></div>
                </div>
                <div className={styles.messages}>
                    <div>Message-1</div>
                    <div>Message-2</div>
                    <div>Message-3</div>
                    <div>Message-4</div>
                </div>
            </div>
    );
}

export default Dialogs;